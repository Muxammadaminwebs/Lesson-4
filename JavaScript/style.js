"use-stick"




// let x = 2;
// function threeIncrement(x) {
//     return x * x * x;

// }
// console.log(threeIncrement(x));



// 2-misol //
// let n = +prompt('birinchi sonni kiriting');
// let d =  +prompt('ikkinchi sonni kiriting');
// function javobi(n, d) {
//     return n+d
// }
// alert(javobi(n, d))


// 3-misol //
// let n = +prompt('birinchi sonni kiriting');
// let d =  +prompt('ikkinchi sonni kiriting');
// function javobi(n, d) {
//     return n-d
// }
// alert(javobi(n,d))

// 4-misol //

// let a = +prompt('Sonni kiriting')
// function daraja1(a) {
//     return a*a;
// }
//  console.log(daraja1(a));
// function daraja2(a) {

//     return Math.pow( a , 3);
// }
//  console.log(daraja2(a));
// function daraja3(a) {
    
//     return Math.pow( a , 4);
// }
//  console.log(daraja3(a));


// let a = +prompt('Sonni kiriting')

// function toq(a) {
//     for (let i = 1; i < a; i++){
//         i%2 == 1 ? console.log(i) : console.log();
//     }
// }
// toq(a)
// let a = +prompt('Sonni kiriting')

// function toq(a) {
//     for (let i = 1; i < a; i++){
//         i%2 == 0 ? console.log(i) : console.log();
//     }
// }
// toq(a)

// 7-misol //
// let a = +prompt('Sonni kiriting')

// function decrement(a) {
//     return a + 1;
// }
// console.log(decrement(a));


// let a = +prompt('Sonni kiriting')

// function decrement(a) {
//     return a - 1;
// }
// console.log(decrement(a));

// let n = 10;

// function increment(incrementNumber, decrementNumber) {
//     let = inc = ++incrementNumber;
//     let = dec = --decrementNumber;
//     return `${inc}  ${dec}`
// }
// console.log(increment(n ,n));


// 8-misol //

// let a = +prompt('Sonni kiriting')


// function divisor(a) {
//     for (let i = 1; i <= a; i++){
//         a % i == 0 ? console.log(i): console.log()
//     }
// }
// divisor(a)
 
// 9-misol //

// for (let i = 1; i < 10; i++){
//     for (let c = 1; c < 10; c++){
//         document.write(i + "*"+ c + "=" + i * c + "</br>")
//     }
        
// }
// const result = document.querySelector('#result');
// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');


// const add= ( ) => {
//     return result.textContent=num1.value*1+num2.value*1
// }
// const add2= ( ) => {
//     return result.textContent=num1.value*1-num2.value*1
// }
// const add3= ( ) => {
//     return result.textContent=num1.value*1*num2.value*1
// }
// const add4= ( ) => {
//     return result.textContent=num1.value*1/num2.value*1
// }
// const delet= ( ) => {
//     return (
//         result.textContent = " ",
//         num1.value = " ",
//         num2.value = " "
//     )
// }


// // ======== qo'shimcha masala ==========



let piy = 3.6;
let vel = 20.1;
let mash = 70;
let sam = 800;

let n = document.getElementById('Masofa');
let result1 = document.getElementById('javob1');
let result2 = document.getElementById('javob2');
let result3 = document.getElementById('javob3');
let result4 = document.getElementById('javob4');



const del = () => {
    return (
        result1.textContent = Math.round(n.value * 1 / piy),
        result2.textContent=Math.round(n.value*1 / vel),
        result3.textContent=Math.round(n.value*1 / mash),
        result4.textContent=Math.round(n.value*1 / sam)
    )
}












