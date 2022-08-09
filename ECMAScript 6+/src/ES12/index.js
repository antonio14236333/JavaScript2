const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';

const replacedString = string.replace('JavaScript', 'Python');
console.log(replacedString);

const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString2);

class Message {
    #show (val){
        console.log(val);
    };
    // get #add(val){
    //     //chi
    // }
}

const message = new Message();
message.show('Hola');

class anyClass {
    constructor(element){
    this.ref = new WeakRef(element);
    } 
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(undefined ??= isFalse);