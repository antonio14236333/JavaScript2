// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const nombres = ['Ana', 'Sofia', 'Carmen', ...['Cris']];
const [, , , miNombre] = nombres;
console.log(miNombre);

const fruits = () => { 
    if (true) { 
        var fruit1 = 'apple'; 
        const fruit2 = 'banana'; 
        let fruit3 = 'kiwi'; 
    } 
    console.log(fruit1);
}

fruits();

