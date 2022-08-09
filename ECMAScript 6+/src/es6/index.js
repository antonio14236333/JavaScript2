function  newFunction(name, age, country){
    var name = name || 'Antonio';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Buebos', 69, 'Chikistrikis');

let hello = 'Mamitas';
let world = 'Puebla';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = 'Manos les van a faltar para pelarme la riata, chi \n' + 'pd: me la pelas papoi';
//ES6
let lorem2= `ahora me la pelan aun mas
chi cheñol`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'antonio',
    'age': 69,
    'country': 'MX'
}

console.log(person.name, person.age);
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

var hola = 'hola';

{
    var globalVar = 'Ola';
}

{
    let globalLet = 'Corre o te violo';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'chi';
console.log(a);

let nombre = 'oscar';
let edad = 69;

obj = { nombre: nombre, edad: edad}

obj1 = {nombre, edad};
console.log(obj1);

const names = [
    {name: 'Antonio', age: 69},
    {name: 'Sara', age: 18}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // ...
}

const listOfNames4 = name => {
    // ...
}

const square = num => num * num;

// const helloPromise = () => {
//     return new Promise((resolve, reject) =>{
//         if (false){
//             resolve('Se resolvio');
//         } else {
//             reject('Valio pito');
//         }
//     });
// }

// helloPromise()
//     .then(resolve => console.log(resolve));
//     .then(()=> console.log('holi'));
//     .catch(reject => console.log(reject));