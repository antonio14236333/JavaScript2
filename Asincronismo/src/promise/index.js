const promise = new Promise((resolve, reject) => {
    resolve('mama buebos!')
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10){
        resolve(`si mamapinga, con ${cows} si alcanzas madafaka`);
    } else {
        reject('mejor mamale');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Por fin'));