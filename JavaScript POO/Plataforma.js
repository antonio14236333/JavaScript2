class Plataforma{
    constructor({
        name,
        escuelas = [],
        profesores = [],
        alumnos = []
    }){
        this.name = name;
        this.escuelas = escuelas;
        this.profesores = profesores;
        this.alumnos = alumnos;
    }
}

class Escuela{
    constructor(name, cursos){
        this.name = name;
        this.cursos = cursos;
    }
}

class Curso{
    constructor({
        name,
        profesor,
        clases = []
    }){
        this.name = name;
        this.profesor = profesor;
        this.clases = clases;
    }
}

class Clases{
    constructor(name, duracion){
        this.name = name;
        this.duracion = (duracion + ' Horas');
    }
}

class Persona{
    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

class Estudiante extends Persona{
    constructor(name, age, sex){
        super(name, age, sex);
    }
}

class Profesor extends Persona{
    constructor(name, age, sex){
        super(name, age, sex);
    }
}



const Quimica = new Clases('Quimica II', 69);
const Biologia = new Clases('Biologia', 23);
const Mate = new Clases('Matematicas', 100);
const Historia = new Clases('Historia Universal', 79);

const MoverteEnTaxi = new Clases('Como moverte en taxi sin morir en el intento', 13);
const MoverteEnCamion = new Clases('Como moverte en camion sin morir en el intento', 15);

const Antonio = new Profesor('Antonio Gonzalez', 19, 'Hombre');
const Sofia = new Estudiante('Sofia Carrillo', 15, 'Mujer');
const Fernanda = new Estudiante('Maria Fernanda', 14, 'Mujer');
const Sara = new Estudiante('Sara Yaneth', 18, 'Mujer');

const ConocimientosBasicos = new Curso({
    name: 'Curso propedeutico',
    profesor: Antonio,
    clases: ['chi']
});
const Moverte = new Curso({
    name: 'Como moverte en la ciudad sin morir en el intento',
    profesor: Antonio,
    clases: [MoverteEnCamion, MoverteEnTaxi]
});

const Vida = new Escuela('Escuela para sobrevivir la vida', Moverte);
const IPN = new Escuela('Escuela de estudio para el examen de ingreso del IPN', ConocimientosBasicos);



const Platzi = new Plataforma({
    name: 'Platzi barato',
    escuelas: [Vida, IPN],
    profesores: [Antonio],
    alumnos: [Sofia, Fernanda, Sara]
});

console.log(Platzi);
console.log(Platzi.escuelas);