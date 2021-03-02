console.log('using-promises.js');
// CallBacks in JavaScript 

// basic scenario 
// let fun = () => {
//     setTimeout(
//         () => {
//             console.log(`two`);
//         }
//         , 2000);
// }
// console.log(`one`);
// fun();
// console.log(`three`);

// callback problem  

// let fun = () => {
//     setTimeout(
//         () => {
//             return { 'name': 'Sonu' };
//         }
//         , 2000);
// }

// const myName = fun();
// console.log(myName.name);
// console.log(`three`);

// solution 1 callbacks 

// let fun = (callback) => {
//     setTimeout(
//         () => {
//             callback({ 'name': 'Sonu' }); // callback function invocation /call 
//         }
//         , 2000);
// }

// fun((doFun) => { console.log(doFun.name) }); // callback function definition 

// console.log(`three`);

// let abc = () => {
//     console.log("Some output");
// };

// function aaa() {
//     console.log("Some other output");
// }

// setTimeout(() => {
//     console.log("Some output")
// }, 2000);

// use cases for call backs 

// use Promise()


let fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false; // false 
            // let error = true; // false 
            if (!error) {
                resolve({ 'name': 'Sonu' });
            }
            else {
                // reject();
                reject({ 'name': 'Not a name' });
            }
        }, 2000);
    });
}
// fun().then().then().catch(); 

// fun().then(response => {
//     console.log(response.name);
// }).catch((reject) => {
//     console.log(reject.name);
// });

// Observable to Promise conversion 
// async await 
// async - function signature   
// await - for an expression (call to Promise) within an async function 

// async function someFun() {};

async function getFun() {
    let myFun = await fun();
    return myFun;
};

// async const getFun = () => {
//     let myFun = await fun();
//     return myFun; 
// };

getFun().then(response => { console.log(response.name); });