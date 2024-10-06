// Wap to print table of any number ?
// let n =  5;
// for(let i = 1; i <= 10 ; i++){
//     console.log(n*i);
// }
//====================================================
// Que.1 wap to calculate sum of even number and odd number into one digit positive ?
// let num1 = 0
// let num2 = 0
// for(let i=0; i<=9; i++) { 
//     if (i%2==0){
//         num1 = num1+i
//     }else{
//         num2 = num2+i
//     }
// }
// console.log("sum of even number",num1, "sum of odd number",num2)

//======================================================================= 
    // let sum = 0
    // for ( let i=1; i<=9; i++){
    //     if(i%2==0)
    //         sum = sum+i
    // }
    // console.log("Even number", + sum);

    // odd number calculate
    // let sum = 0
    // for ( let i=1; i<=9; i++){
    //     if(i%2 !=0)
    //         sum = sum+i
    // }
    // console.log("odd number",sum);
//=====================================================================

// Que.2 Wap to check prime number in for loop
//  let num = 7
//  let factor = 0
//  for (let i = 1 ; i <=num ; i++){
//     if(num% i==0){
//         factor++
//     }
//  }
//  if(factor==2){
//     console.log("prime number");
//  } else{
//     console.log("not a prime number");
//  }

//==========================================================================

// Que.3 Wap to display 1 to 10 and 10 to 1 using single for loop 

    // for (let i = 1; i<=21; i++){
    //     if(i<=10){
    //         console.log(i);
    //     } else{
    //         console.log(21-i);
    //     }
    // } 

//========================================================================

// Que.4 wap to fibonacci series ?
// let num = 10
// let a = 0
// let b = 1
// let c = 0

// for (let i = 0 ; i <=num ; i++){
//     console.log(c + ",");
//     a = b
//     b = c
//     c = a+b 
// }

//=====================================================================

// Que.5 wap to calculate square and cube of one digit positive number ?

//  let num = 5 
//  let square = 0
//  let cube = 0 
//  for (let i= 1; i<=num; i++){
//    square = i*i
//    console.log("sqaure of",i,"=", +square);
//    cube = i*i*i
//     console.log("cube of ",i,"=", +cube);
//  } 
//========================================================================

//Que.6 Wap to reverse any digit number using for loop ?
// Without Loop solve
    // let num = 123;
    // let lastnum = num % 10;              // // Get the last digit
    // num = parseInt(num / 10);            // // Remove the last digit
    // let middlenum = num % 10;            // // Get the middle digit
    // let firstnum = num;                  // // The first digit is now the value of num
    // let res = lastnum * 100 + middlenum * 10 + firstnum; // // Combine the digits in reverse order
    // console.log("Result is", res);

    // अंतिम अंक: num % 10 का उपयोग करके हम अंतिम अंक प्राप्त करते हैं। (873 का अंतिम अंक 3 है।)
    // मध्य अंक: अंतिम अंक को हटाने के बाद, num % 10 का उपयोग करके मध्य अंक प्राप्त किया जाता है। (अब num 87 है, जिसका मध्य अंक 7 है।)
    // पहला अंक: जब हम अंतिम और मध्य अंकों को हटा देते हैं, तो जो बचता है वह पहले अंक का मान होता है। (अब num 8 है, जो पहले अंक है।)
    // परिणाम: अंकों को उल्टे क्रम में मिलाकर एक नया संख्या बनाते हैं। (अंतिम अंक 3, मध्य अंक 7, और पहला अंक 8 मिलाकर 378 बनता है।)

// With Loop ####################################################################################################

// let num = 143 ;
// let res = 0
// for(;num!=0;){
//     let rem = num % 10 ;
//     res = res * 10 +rem  
//     num = parseInt(num / 10)
// }
//     console.log("Result is", res);

// let i = 1 
// do {
//     console.log("hello");
//     i++
// } while(i>10)


// const number = 123456;
// let sum = 0;
// for(i = 0; i <= number; i++){

//     sum = sum + i;
// }
// console.log(sum);

//=====================================
// Que.7 find the factorial number ?
// let number  = 5
// let factorial = 1

// for (let i = 1; i<=number; i++){
//     factorial = factorial*i
// }
// console.log(factorial);


