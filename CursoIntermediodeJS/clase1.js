const juan = {
    name: 'Antonio',
    age: 18,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
        console.log("This ", this);
        console.log("This ", this.approvedCourses);
    }

};


Object.freeze(juan);
console.log(Object.getOwnPropertyDescriptors(juan));
// Object.seal(juan);
// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));


// juan.addCourse('buebos');

// Object.defineProperty(juan, 'pruebaNASA', {
//     value: 'buebos verdes',
//     writable: false,
//     configurable: false,
//     enumerable: false
// });

// Object.defineProperty(juan, 'pruebaCTM', {
//     value: 'buebos verdes',
//     writable: false,
//     configurable: true,
//     enumerable: true
// });

// Object.defineProperty(juan, 'pruebaBUEBITOS', {
//     value: 69  ,
//     writable: true,
//     configurable: false,
//     enumerable: true
// });

// Object.defineProperty(juan, 'pruebaBUEBITOSmaster', {
//     value: 12,
//     writable: true,
//     configurable: true,
//     enumerable: false
// });

// Object.defineProperty(juan, 'prueba69', {
//     value: 78,
//     writable: true,
//     configurable: true,
//     enumerable: true
// });

// console.log(Object.getOwnPropertyDescriptors(juan));
// console.log(juan);