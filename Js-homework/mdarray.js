// Multi dimensional array is collection of row and column 
// Class Example Que.====
//
// let arr = [
//     [1, 2, 3, 4, 6],
//     [1, 2, 3]
// ];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
//     console.log("next row");
// }
//==========================================
// 1st method 
// let arr = [[1, 2, 3, 4, 6], [1, 2, 3]];
// for (let row of arr) {
//     for (let col of row) {
//         console.log(col);
//     }
//     console.log("Next Row");
// }
//
// 2nd Method 
//
// let arr = [
//     [1, 2, 3, 4, 6],
//     [1, 2, 3]
// ]
//
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(arr[i][j]);
//     }
//     console.log("Next Row");
// }
//
//=================================================

// Que.1) Wap to calculate Addition and Multiplication of matrix element in array
// let A = [
//     [1, 2],
//     [3, 4]
// ]
// let B = [
//     [5, 6],
//     [7, 8]
// ]
//
// let result = []
// for (let i = 0; i < A.length; i++) {
//     result[i] = []
//     for (let j = 0; j < B[0].length; j++) {
//         result[i][j] = A[i][j] + B[i][j]
//     }
// }
// let multiply = []
// for (let i = 0; i < A.length; i++) {
//     multiply[i] = []
//     for (let j = 0; j < B[0].length; j++) {
//         multiply[i][j] = A[i][j] * B[i][j]
//     }
// }
// console.log("Addition Result is :", result);
// console.log("Multiple Result is :", multiply);

//=================================================================
// Que.2 Wap to display prime element in matrix array


//==================================================================
// Que.3) Wap to find max element in matrix array
// let x = [
//     [33, 55, 79],
//     [16, 26, 22],
//     [47, 77, 82]
// ];
//
// var max = x[0][0];
//
// for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x[i].length; j++) {
//         if (x[i][j] > max) {
//             max = x[i][j];
//         }
//     }
// }
// console.log("Max element in matrix", max);
//=================================================
// Que.3.1) Wap to find max element in two matrix array

// let matrix1 = [
//     [3, 5, 9],
//     [1, 6, 21],
//     [4, 7, 8]
// ];

// let matrix2 = [
//     [10, 15, 9],
//     [12, 16, 20],
//     [14, 7, 18]
// ];

// let max = matrix1[0][0];

// for (let i = 0; i < matrix1.length; i++) {
//     for (let j = 0; j < matrix1[i].length; j++) {
//         if (matrix1[i][j] > max) {
//             max = matrix1[i][j];
//         }
//     }
// }

// for (let i = 0; i < matrix2.length; i++) {
//     for (let j = 0; j < matrix2[i].length; j++) {
//         if (matrix2[i][j] > max) {
//             max = matrix2[i][j];
//         }
//     }
// }

// console.log("Max element in matrix", max);

//=====================================================================
