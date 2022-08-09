
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

function requiredParam(param){
    throw new Error("Chiksitrikis, pon un " + param + " pa que jale");
}

function createStudent({
    name = requiredParam('nombre'),
    age = requiredParam('edad'), 
    email,
    twitter,
    github,
    facebook,
    approvedCourses = [],
    learningPaths = []

} = {}) {
    const private = {
        '_name': name,
    };
    const public = {
        age,
        email,
        learningPaths,
        approvedCourses,
        socialMedia: {
            twitter,
            github,
            facebook
        },
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length != 0){
            return private["_name"];
            } else {
                console.warn('Pon algo, cabeza de polla');
            }
        }
        // readName(){
        //     return private["_name"];
        // },
        // changeName(newName){
        //     private["_name"] = newName;
        // }
    };


    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false
    });
    
    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false
    });

    return public;
}

// const juanita = createStudent({
//     name: 'buebos',
//     age: 18,
//     email: 'chi',
//     twitter: 'porfavor'
// });

const juanita = createStudent({
    name: 'mami',
    email: 'buebos',
    age: 19
});