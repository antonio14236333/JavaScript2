function jugar(op1){
    var opciones = ["Piedra", "Papel", "Tijera"];
    var x = (Math.floor(Math.random()*3));
    console.log("La cpu escogio: " + opciones[x] + '\n'); 
    console.log("Y usted escogio: " + opciones[op1]);
    if((op1===0&&x===2)||(op1===1&&x===0)||(op1===2&&x===1)){
        console.log("Usted ganó!!! :D");
    } else if (op1===x){
        console.log("Empataron :O");
    } else {
        console.log("Ganó la cpu :(");
    }
}

jugar(0);
