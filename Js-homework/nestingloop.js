//=============== STAR, NUMBER, ALPHABATE PATTERNS QUE. Start ================

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 6 -1; j++) {
//         process.stdout.write(j + "");
//     }
//     console.log(); // Move to the next line after each inner loop
// }
// output => 12345
//           12345
//           12345
//           12345
//           12345

//=============================================================================
//=== Number-increasing pyramid
// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// 1ST METHOD
// for(let i = 1 ; i <= 5; i++){
//     for(let j = 1 ; j <= i; j++){
//         process.stdout.write(j + " ")
//     }process.stdout.write("\n")
// }  

// 2nd METHOD
// let n = 5
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j + " ")
//     }
//         process.stdout.write("\n")
// }

//======================================================================
//# A B C D -increasing pyramid
// A
// A B
// A B C 
// A B C D 
// A B C D E  

// 1ST METHOD
// for(let i = 1 ; i <= 5; i++){
//     let ch = 'A'.charCodeAt()
//     for(let j = 1 ; j <= i; j++){
//         process.stdout.write(String.fromCharCode(ch)+" ");
//         ch++
//     }process.stdout.write("\n")
// } 

// 2ND METHOD
// for(let i = 69; i >= 65; i--) {
//     var ch = 'A'.charCodeAt()
//     for(let j = 65; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(j) +" ");
//         ch++;
//     }
//     process.stdout.write("\n" );
// }
//================================================================
// A B C == increasing reverse pyramid small and capital 
// A a B b C
// A a B b
// A a B
// A a
// A

// for (let i = 69; i >= 65; i--) {
//   let data = 65;
//   for (let j = 65; j <= i; j++) {
//     if (j % 2 === 0) {
//       process.stdout.write(String.fromCharCode(data + 32) + " ");
//       data++;
//     } 
//     else process.stdout.write(String.fromCharCode(data) + " ");
//   }
//   process.stdout.write("\n");
// }
//==============================================================
// Right triangle star pattern
// *
// * *
// * * *
// * * * *

// for(let i = 1; i <= 4; i++){
//     for(let j = 1 ; j <= i; j++){
//         process.stdout.write("* ")
//     } process.stdout.write("\n")
// }
//=========================================================
// Downward Triangle start pattern

// * * * *
// * * *
// * *
// *

// for(let i = 4; i >= 1; i--){
//     for(let j = 1 ; j <= i; j++){

//         process.stdout.write("* ")
//     } process.stdout.write("\n")
// }
// ============================================================

// Left tringle star pattern 
//
// 
//       *
//     * *
//   * * *
// * * * *

// for(let i = 1; i <= 4 ; i++ ){          //  i loop ke liye 
//   for(let k = 3; k >= i; k--){         // space lopp ke liye 
//     process.stdout.write(" ")
//   }
//   for(let j = 1; j <= i; j++){       // column j loop ke liye 
//     process.stdout.write("*")       // agar star ke baad space denge to pyramid star pattern banega
//   }
//   process.stdout.write("\n")
// }

// pattern logic 

// i = 1  1<=4
// k = 3  3 >= 1 true   -    1 space 
// k = 2  2 >= 1 true   - -    2 space
// k = 1  1 >= 1 true   - - -    3 space  

//========================================================================

// Pyramid Star Pattern
//
//    *
//   * *
//  * * *
// * * * *

// for (let i = 1; i < 5; i++) { //  i loop ke liye 
//     for (let k = 3; k >= i; k--) { // space lopp ke liye 
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) { // column j loop ke liye 
//         process.stdout.write("* ") // star ke baas space diya hai
//     }
//     process.stdout.write("\n")
// }

//=======================================================================

// ===== Diamond star pattern =====

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
//
// for (let i = 1; i < 5; i++) { //  i loop ke liye 
//     for (let k = 3; k >= i; k--) { // space lopp ke liye 
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) { // column j loop ke liye 
//         process.stdout.write("* ") // star ke baas space diya hai
//     }
//     process.stdout.write("\n")
// }
// for (let i = 1; i < 5; i++) {
//     for (let k = 1; k <= i; k++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j < 5 - i; j++) {
//         process.stdout.write("* ")
//     }
//     process.stdout.write("\n")
// }


//==== 2nd Method of Dimond star pattern =====

// for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 6 - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= 1 * i - 1; j++) {
//         process.stdout.write("* ")
//     }
//     process.stdout.write("\n")
// }
// for (let i = 6 - 1; i >= 1; i--) {
//     for (let j = 1; j <= 6 - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= 1 * i - 1; j++) {
//         process.stdout.write("* ")
//     }
//     process.stdout.write("\n")
// }

//======================================================================