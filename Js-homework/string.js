//Ex.1) Wap to count total number of vowel and consonent in string 

// let s = "Vimal"
// let v = 0
// let c = 0

// for (let i = 0; i < s.length; i++){
//     if(s.charAt(i) == 'a' || s.charAt(i)=='e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u' ){
//         v++
//     }
//     else{
//         c++
//     }
//     console.log(`Total vowel i ${v} and consonet i ${c}`);
// }
//==============================================================================================
//Ex.2 Wap to reverse the string

// let s = "welcome"
// let s1 = ''

// for(let i = s.length-1; i >= 0; i--){
//     s1 = s1+s[i]
// }
// console.log(s1);

//=========================================================================

//Ex.3 Wap to check given string is pallindrome or Not ?

// let s = "Madam"
// r = ""
// let p = ""

// for (let i = s.length-1; i >= 0; i--){
//     r += s[i]
// }
//     p+= s == r ? "pallindrome" :  "Not pallindrome"
//         console.log(p);

//=========================================================================

//Ex.4 Wap to convert string Lower to Upper case 

// let s = "hello"
// let s1 = ''

// for(let i = 0; i < s.length; i++){
//     let asc = s.charAt(i).charCodeAt() - 32
//     s1 = s1+String.fromCharCode(asc)
// }
// console.log(s1);

//=========================================================================

//Ex.5 Wap to convert string uppercase to lowercase 

// let s = "HELLO"

// let s1 = ''
// for(let i = 0; i <s.length; i++){
//     let asc = s.charAt(i).charCodeAt() + 32
//     s1 = s1+String.fromCharCode(asc)
// }
// console.log(s1);

//=========================================================================

//Ex.6 Wap to convert each characters in opposite case ?

// let s = "Hello wElCoMe"
// let s1 = ''
// for(let i = 0; i < s.length; i++){
//     let asc = s.charAt(i).charCodeAt()
//     asc = asc < 90 ? asc + 32 : asc - 32 
//     s1 = s1 +String.fromCharCode(asc)
// }
// console.log(s1);

//=======================================================================

// Home work Que.
// Que.1 Wap to calculate length of string without using length property 

// let str = "Hello, world"
// let c = 0

// for(let char of str){
//     c++
// }
// console.log(c);

//=======================================================================
// Que.2 Wap to total frequency (no.of repetation) in characters in string ?

// let s = "aaaabaasdebbbbdjjjllddddddddddddddddddddddddddddddsseev "
// for (let i = 0; i < s.length; i++) {
//     let c = 1
//     let f = true;

//     for (let k = 0; k < i; k++) {
//         if (s[i] == s[k]) {
//             f = false;
//             break;
//         }
//     }
//     for (let j = i + 1; j < s.length && f; j++) {
//         if (s[i] == s[j] && i != j) {
//             c++
//         }
//     }
//     if (f) {
//         console.log(s[i], c);
//     }
// }
//========================================================================
// Que.3 Wap to find maximum length in pallindrome in paragraph ?

// let s = "abcd aaa kkkk sssssss llllll dddddd roqs"
// let arr = s.split(" ")
// let mx = 0
// let mxpallindrome = '';
// for(let i = 0; i < arr.length; i++){
//     let data = arr[i]
//     let data1 = "";
//     for (let j = data.length - 1; j >=0; j--){
//         data1 +=data.charAt(j)
//     }
//     if(data === data1){
//         if(mx < data.length){
//             mx = data.length
//             mxpallindrome = data
//         }
//     }
// }
// console.log(mxpallindrome);
//=======================================================================
// Que.4 Wap to validate email id => Vimal.kumrawat2006@gmail.com ?

// let dotpos = 0
// let atpos = 0
// let i = 0
// let email = "abcd@gmail.com"
// for(let data of email){
//     if(data == '.')
//     {
//         dotpos = i
//     }
//     if(data == '@')
//     {
//         atpos = i 
//     }
//     i++
// }
// console.log(atpos, dotpos);
// if(dotpos == 0 || atpos == 0 || atpos > dotpos || (dotpos - atpos) < 3 || dotpos == email.length - 1 ){
//     console.log("Invalid email id");
// } else {
//     console.log("valid email id ");
// }
//======================================================================
// Que.5 Wap to find second maximum characters in string ?

// let x = "abcd aaa kkkk kjjkjkjjk lllll jj vvv";
// let arr = x.split(" ");
// let m = "", s = "";

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > m.length) {
//         s = m;
//         m = arr[i];
//     } else if (arr[i].length > s.length && arr[i] !== m) {
//         s = arr[i];
//     }
// }

// console.log("Maximum characters is:", m);
// console.log("Second maximum characters is:", s);

//======================================================================

// Que.6 Wap to count alphabat, number and special characters

// let s = "vimalkumrawat@$12345abcd"
// let c1 = 0, c2 = 0, c3 = 0;
// for (let data of s)
// {
//     if(data >= '0' && data <= '9'){
//         c1++
//     }
//     else if (data >= 'A' && data <= 'Z' || data >= 'a' && data <= 'z'){
//         c2++
//     }
//     else {
//         c3++
//     }
// }
// console.log(`number is ${c1}, alphbat is ${c2},special character ${c3}`);
//===================================================================================

// Que.7 Wap to check that mobile number is correct or not and mobile number should be 10 digits and numeric characters ?
// let s = '9827640150'
// let c = 0
// let f = true
// let msg = ''

// for (let data of s )
// {
//     if(data < '0' || data > '9'){
//         msg = "mobile numbere should be numeric"
//         f = false 
//     }
//     c++
// }
// if(!f)
// {
//     console.log(msg);
// }
// else if (c !==10){
//   console.log("mobile number should be 10 digits");  
// }
// else {
//     console.log("mobile number is valid");
// }


let n = "jahaj"
let s = ''

for(let i = n.length - 1; i >= 0; i--){
    s += n[i] 
}
console.log(s);
