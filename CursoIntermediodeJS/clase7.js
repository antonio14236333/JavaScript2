// Duck Typing

function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;
    const  subjectIsArray = isArray(subject);
    const  subjectIsObject = isObject(subject);
    if(subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }
    for(key in subject){
        const keyIsObject = isObject(subject[key]);
        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray){
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        github: undefined,
        facebook: undefined
    }
};

const juan = deepCopy(studentBase);
Object.seal(juan);

// Object.defineProperty(juan, "name", {
//     value: 'Chikistrikis',
//     configurable: false
// });

juan.name = 'Chikistrikis';
Object.isSealed(juan);
Object.isFrozen(juan);

function LearningPath({
    name = requiredParam("name"),
    courses = []
}){

    this.name = name;
    this.courses = courses;



    // const private = {
    //     "_name": name,
    //     "_courses": courses
    // }

    // const public = {
    //     get name(){
    //         return private["_name"];
    //     },
    //     set name(newName){
    //         if(newName.length != 0){
    //         return private["_name"];
    //         } else {
    //             console.warn('Pon algo, cabeza de polla');
    //         }
    //     },
    //     get courses(){
    //         return private["_courses"];
    //     }
    // }

    // return public;
}

function requiredParam(param){
    throw new Error("Chiksitrikis, pon un " + param + " pa que jale");
}

function Student({
    name = requiredParam('nombre'),
    age = requiredParam('edad'), 
    email,
    twitter,
    github,
    facebook,
    approvedCourses = [],
    learningPaths = []

} = {}) {
    if(!Array.isArray(learningPaths)){
        console.warn("LearningPath no es un array");
    }

    for(learningPathIndex in learningPaths){
        if(!learningPaths[learningPathIndex] instanceof LearningPaths){
            console.warn("LearningPath no es un verdadero LearningPath");
            return;
        }
    }

    this.name = name;
    this.email = email;
    this.age = age;
    this.learningPaths = learningPaths;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        github,
        facebook
    }



    // const private = {
    //     '_name': name,
    //     "_learningPaths": learningPaths
    // };
    // const public = {
    //     age,
    //     email,
    //     approvedCourses,
    //     socialMedia: {
    //         twitter,
    //         github,
    //         facebook
    //     },
    //     get name(){
    //         return private["_name"];
    //     },
    //     set name(newName){
    //         if(newName.length != 0){
    //         return private["_name"];
    //         } else {
    //             console.warn('Pon algo, cabeza de polla');
    //         }
    //     },
    //     get learningPaths(){
    //         return private["_learningPaths"];
    //     },
    //     set learningPaths(newLp){
    //         if(!newLp.name){
    //             console.warn("Tu Lp no tiene name");
    //             return;
    //         } else if (!newLp.courses) {
    //             console.warn("Tu Lp no tiene courses, pvto");
    //             return;
    //         } else if(!Array.isArray(newLp.courses)){
    //             console.warn("Tu Lp no es una lista");
    //             return;
    //         }

    //         private["_learningPaths"].push(newLp);
    //     }
        // readName(){
        //     return private["_name"];
        // },
        // changeName(newName){
        //     private["_name"] = newName;
        // }
    // }


    // Object.defineProperty(public, "readName", {
    //     writable: false,
    //     configurable: false
    // });
    
    // Object.defineProperty(public, "changeName", {
    //     writable: false,
    //     configurable: false
    // });

    // return public;
}

// const juanita = createStudent({
//     name: 'buebos',
//     age: 18,
//     email: 'chi',
//     twitter: 'porfavor'
// });

const escuelaWeb = new LearningPath({ name: 'Chi'});
const escuelaData = new LearningPath({ name: 'Ño'});

const juanita = new Student({
    name: 'mami',
    email: 'buebos',
    age: 19,
    learningPaths: [
        escuelaWeb,
        escuelaData
    ]
});
