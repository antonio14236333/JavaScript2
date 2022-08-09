const letters = ['a', 'b', 'c', 'd', 'e'];
// let newArray = [];

const newArray = letters.map(item => item + '++');
// letters.forEach( letter => {
//     newArray.push(letter + '++');
// });

console.log('Original ', letters);
console.log('New', newArray);

function solution(array) {
        return newArray = array.map(num => num * 2);
}; 

console.log(solution([2, 4, 5, 6]));

function solution(products){
        products.map(item => {
                item['taxes'] = (item.price/100)*19

        });
        return products;
}; 

function solution(products){
        return products.map(item => ({
                ...item,
                taxes: (item.price*19)/100
        }));
}

solution(['amor', 'sol', 'piedra', 'día']);

const words = ['amor', 'sol', 'piedra', 'día'];
const rta = words.filter(item => item.length >= 4);
console.log(rta);

const search = (query) => {
        return orders.filter(item => {
                return item.customerName.includes(query);
        });
};


const total = [1, 2, 3, 4];

const rta_2 = total.reduce((sum, item) => sum + item, 0);

console.log(rta_2);

const array1 = [1, 3, 2, 3];

const rta2 = array1.reduce((obj, item) => {
        if(!obj[item]){
                obj[item] = 1;
        } else {
                obj[item] = obj[item] + 1;
        }
        return obj;
}, {});

console.log(rta2);


objchido = {};

objchido['name'] = 'buebos',
console.log(objchido);




console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
setTimeout(()=>{
        console.log('tocino');
}, 0);
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');
console.log('buebos');