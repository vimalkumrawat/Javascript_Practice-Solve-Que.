// Ternary Operator 
// it is used to solve condition based program using single line expression

// Syntax ------
// var s = (condition) ? true : false 
//           a > b ? 
//#####################################################################
// ex.1 
// let age_person1 = 25 
// let age_person2 = 25 
// let result = age_person1 > age_person2 ? "person1 age is greater" : "person2 age is greater"
//#####################################################################
// ex.2 Wap to check to positive and negative number ?
// let num = -1
// let result = (num > 0) ? "number is positive " : "number is negative"
// wap to check that one digit and above digit 
// let num =  5
// let result = (num > 0 && num < 10) ? "one digit" : "above digit"

// ######################################################################

// Que.1 write a program to check leap year ?

    // let year = 2005
    // let result = (year % 4 ==0 && year % 100 != 0) || (year % 400 == 0) ? "leap year" : "not a leap year"
    // console.log(result);

// ##################################################################################################

// Que.2 write a program to check that Vowel & consonent ?

    // let ch = 'b'
    // let res = ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ? "vowel" : "consonent"
    // console.log(res);

// ##################################################################################################

// Que.3 write a program to check even number and odd number ?

    // var num = 25
    // var res = (num % 2 ===0)? "Even number":"odd number"
    // console.log(res);


// ###############################################################################################

// Que.4 write a program to check number is divisible by 3 and 5 ?

    // var num = 25
    // var res = (num % 3 ==0 && num % 5 ==0)? "Divisible by 3 and 5 ":"Not divisible by 3 and 5"
    // console.log(res);

// ##########################################################################################

//  Que.5 write a program find greater age into 3 persons?
    // var persons1 = 25
    // var persons2 = 85
    // var persons3 = 510
    // var result = persons1 > persons2 ?
    //  (persons1 > persons3 ?  "person1 age is greater" : "person3 age is greater "):
    // (persons2 > persons3 ?  "person2 age is greater" : "person3 age is greater" )
    // console.log(result);

// #########################################################################################

// Que.6 write a program find middle age into 3 persons?

    let a = 23
    let b = 16
    let c = 78

    let res = (a > b && a < c || a < b  && a > c) ? "a is middle age " : ""
    //#####################################################################