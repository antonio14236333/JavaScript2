const antonio = {
    name: 'Antonio',
    age: 18,
    cursosAprobados: [
        'HTML',
        'CSS'
        
    ],
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
};

antonio.aprobarCurso('Buebos');
console.log(antonio);

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (curso){
    //     this.cursosAprobados.push(curso);
    // }
}

Student.prototype.aprobarCurso = function (curso){
        this.cursosAprobados.push(curso);
    }

const juanita = new Student('Juana', 19, ["Juegos", "Buebos"]);

console.log(juanita);

class Student2 {
    constructor({
        name,
        age,
        cursosAprobados
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso2(curso){
        this.cursosAprobados.push(curso);
    }
}

const miguelito = new Student2("Miguel", 28, ['Business Man', 'Buebos2']);
console.log(miguelito);
miguelito.aprobarCurso2('ctm papoi');
console.log(miguelito);