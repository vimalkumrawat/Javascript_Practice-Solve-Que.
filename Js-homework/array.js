// Examples.=======================================================================

//     let x = ["c", 12, 89, "c++", true, 11]
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);
// console.log(x[3]);
// console.log(x[4]);
// console.log(x[5]);
// =========================================================================

// # Wap to calculate sum of array element
// let x = [2, 3, 5, 6, 8]
// let sum = 0
//     for (let i = 0; i< x.length ; i++){
//         sum = sum +x[i]
//     }
//     console.log(sum);

// =====================================================================================
// wap to calculate sum of even and odd element
// let x = [2, 3, 5, 6, 7, 8]
// let sum1 = 0
// let sum2 = 0

// for(let i=0 ; i < x.length; i++){
//   if(x[i] % 2 == 0){
//    sum1 =sum1 + x[i]
//    }
//    else{
//     sum2 = sum2 + x[i]
//    }
//  }
//  console.log("Toatl of even element",sum1, "Toatal of odd element",sum2);

// =====================================================================================

// Wap to reverse of array element
// let x = [2, 3, 8, 9, 11, 12]
// for(let i= x.length-1 ; i > 0 ; i--){
//     console.log(x[i]);
// }
// ====================================================================================

// Que.1) Wap to find maximum element in array ?

// let x = [13, 10, 8, 12, 2];
// let maximum = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] > maximum) {
//             maximum = x[i];
//         }
//     }
//     console.log("The maximum element is:", maximum);

// find minimum element in array ?

// let y = [13, 10, 80, 12, 10];
// let minimum = y[0];
//     for (let i = 1; i < y.length; i++) {
//         if (y[i] < minimum) {
//             minimum = y[i];
//         }
//     }
//     console.log("The minimum element is:", minimum)

// =========================================================================================

// Que.2) Wap to find second maximum element in array ?

let x = [1, 8, 9, 6, 5, 4, 21, 19]
let m = 0 , s = 0;

for (let i = 0; i < x.length; i++){
    if (m < x[i]){
        s = m
        m = x[i]
    }
    else if  (s < x[i])
    {
       s = x[i]
    }
}
    console.log("maximum element is", m);
    console.log("second maximum element is", s);

// ==================================================================================

// Que.3) Wap to find prime element in array ?

// let x = [2, 9, 11, 13, 17, 23, 6]

// for (let j = 0; j < x.length; j++) {
//     let num = x[j]
//     let c = 0

//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0)
//             c++
//     }
//     if (c == 2) {
//         console.log(num);
//     }

// }

// ==================================================================================

// Que.4) Wap to sort element in array ?
// let x = [2, 9, 5, 7, 3, 1]

// for(let i = 0; i <x.length; i++)
//     {
//         for(j = i+1; j<x.length; j++){
//         if (x[i] > x[j]){
//             let t = x[i]
//             x[i] = x[j]
//             x[j] = t
//         }
//
//     }console.log(x[i]);
// }

//===========================================================
// Que.5) Wap to marge two array in one array 
//
// let x = [1, 2, 3, 10];
// let y = [4, 5, 6];
// let z = [];

// for (let i = 0; i < x.length; i++) {
//     z[i] = x[i];
// }
// for (let i = 0; i < y.length; i++) {
//     z[x.length + i] = y[i]
// }
// console.log(z)
//==============================================================
// Que.6) Wap to display unique elements array 

// let x = [1, 2, 3, 2, 4, 5, 3]
// for (let i = 0; i < x.length; i++) {
//     let f = true;
//     for (let j = 0; j < x.length; j++) {
//         if (x[i] == x[j] && i != j) {
//             f = false;
//         }
//     }
//     if (f) {
//         console.log(x[i]);
//     }
// }

// outut [1,4,5]

//===========================================================
// Que 6.1) Wap to display duplicate elements array

// let x = [1, 2, 3, 2, 4, 5, 3]
// for (let i = 0; i < x.length; i++) {
//     let f = true;
//     for (let j = 0; j < x.length; j++) {
//         if (x[i] == x[j] && i != j) {
//             f = false;
//         }
//     }
//     if (!f) {
//         console.log(x[i]);
//     }
// }

// outut [2,3,2,3]
//=============================================================
// Que 6.2) Wap to display duplicate but not repeat element array

// let x = [1, 2, 3, 2, 4, 5, 3]
// let arr = [];
// for (let i = 0; i < x.length; i++) {
//     let f = true;
//     for (let j = 0; j < x.length; j++) {
//         if (x[i] == x[j] && i != j) {
//             f = false;
//             break;
//         }
//     }
//     if (!f) {
//         if (!arr.includes(x[i])) {
//             arr.push(x[i])
//         }
//     }
// }
// console.log(arr);

// outut [2,3]
//==============================================================


