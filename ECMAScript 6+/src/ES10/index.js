let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(1));
console.log(array.flat(2));

let array2 = [1,2,3,4,5,6];

console.log(array2.flatMap(value => [value, value * 2]));

let hello =  '              hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 =  'hello2 world               ';
console.log(hello2 + 'chi');
console.log(hello2.trimEnd() + 'chi');

