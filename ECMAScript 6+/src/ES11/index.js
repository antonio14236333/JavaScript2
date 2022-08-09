const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import ('./file.js');
    module.hello();
});

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


Promise.all([promise1, promise2, promise3])
.then(response => console.log(response));


console.log(window);
console.log(globalThis);

const fooo = 'no soy nulo' ?? 'default string';
console.log(fooo);


const user = {
    profile: {
        email: 'antoino@gmail.com'
    }
};
console.log(user?.profile?.email);
if(user?.profile?.email){
    console.log('chi');
} else {
    console.log('buebos');
}