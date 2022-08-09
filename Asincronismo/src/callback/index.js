function sum(num1, num2){
    return num1+num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(5, 5, sum));

setTimeout(function(){
    console.log('Buebos');
}, 2000);

function saludo(name){
    console.log(`Buebos ${name}`);
}
setTimeout(saludo, 2000, 'chikistrikis');
