const letters = ['a', 'b', 'c', 'd', 'e'];
letters.forEach( letter => console.log('forEach', letter));


obj = {
    name: 'el patron',
    sexo: 'si, porfavor'
};

obj2 = obj;

obj3 = {...obj};

let array= [obj, obj2, obj3];

obj.name = 'quedaste';
obj.sexo = 'tengo sida';

array.forEach(objetos => {
    console.log(objetos);
});