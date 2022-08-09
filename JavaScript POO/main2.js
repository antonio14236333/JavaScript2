class course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name;
        this.classes = classes;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        if(newName === "Buebos"){
            console.error("Buebos la tuya");    
        } else {
            this._name = newName;
        }
    }
    // changeName(newName){
    //     this._name = newName;
    // }
}

const pooBasico = new course({
    name: 'POO básico',
    classes:       [
    'POO basico',
    'POO intermedio',
    'POO para JavaScript'
    ]
});


// pooBasico.changeName('POO basico actualizado');

class Paths{
    constructor({
        name,
        learningPaths = []
    }){
        this.name = name;
        this.learningPaths = learningPaths;
    }
    show(){
        console.log(this.name);
        console.log(this.learningPaths + '\n');
    }
    addCourse(course){
        this.learningPaths.push(course);
        console.log('Los cursos actualizados despues de añadir curso, son ');
        console.log(this.learningPaths + '\n');
    }
    deleteCourse(){
        this.learningPaths.pop();
    }
}
const IDAW = new Paths({
    name: 'Introducción al Desarrollo de Aplicaciones Web',
    learningPaths: [
        'HTML',
        'CSS',
        'JavaScript'
    ]
});

const POO = new Paths({
    name: 'Programacion Orientada a Objetos',
    learningPaths: [
        'POO basico',
        'POO intermedio',
        'POO para JavaScript'
    ]
});


class Student{
    constructor({
        name,
        age,
        email,
        username, 
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths
    }
}

const juan = new Student({
    name: 'Antonio',
    age: 18,
    username: 'amox',
    email: 'buebos@gmail.com',
    instagram: 'chikistrikis',
    learningPaths: IDAW
});


const juan2 = new Student({
    age: 29,
    name: 'Antonio Mamado',
    username: 'amox69',
    email: 'buebosconaceite@gmail.com',
    instagram: 'chikistrikismacaquis',
    facebook: 'mamitas',
    twitter: 'puebla',
    learningPaths: POO
});


class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('Lo sentimos, paga pvto');
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
}