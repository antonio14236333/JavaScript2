// Funcion recursiva
// function recursiva(){
//     if(validacion){
//         llamados recursivos
//     } else {
//         llamados normales, sin recursividad
//     }
// }

const numeritos = [0, 1, 2, 3, 4, 5 ,6 ,7 ,8 ,9,10];
let numerito = 0;
for(let index = 0; index < numeritos.length ; index ++){
    numerito = numeritos[index];
    console.log({index, numerito});
}

function recursiva(param){
    if(param.length != 0){
        const first = param[0];
        console.log(first);
        param.shift();
        return recursiva(param);
    } else {
        return 0;
    }
}

recursiva(['buebos', 'chikistriquis', 'mami']);