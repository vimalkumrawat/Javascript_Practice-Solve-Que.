// # Wap to check even and odd number using switch 
//  let num=7;
//  switch(num%2){
//      case 0 :
//      console.log('The Number is even')
//      break ;
//      default:
//      console.log('The Number is odd')
//      break ;
// }
// #################################################################################

// Que.1 Wap to calculate addition,substraction,muliplication and division 
//  of two number when user assign '+', '-', '*', '/', '%' symbol?
let num1 = 10; 
let num2 = 5;  
let operator = '+'; // Operator ('+', '-', '*', '/', '%')
let result;
switch (operator) {
    case '+':
        result = num1 + num2;
        console.log("The result of",result)
        break;
    case '-':
        result = num1 - num2;
        console.log("The result of",result);
        break;
    case '*':
        result = num1 * num2;
        console.log("The result of",result);
        break;
    case '/':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
        } else {
            result = num1 / num2;
            console.log("The result of",result);
        }
        break;
    case '%':
        result = num1 % num2;
        console.log("The result of",result);
        break;
    default:
        console.log("Error: Invalid operator.");
}
// ####################################################################################

// Que.2 Wap to cheek leap year using switch case?
        // let year = 1200
        // switch (year % 400 ==0 || year % 4==0 && year % 100 !=0){
        //     case true:
        //         console.log("leap year ");
        //         break;
        //     default:
        //         console.log("Not a leap year");
        //         break;
        // }
// ########################################################################################

// Que.3 Wap to display 'YES', 'NO', and 'CANCEl' when user assign 'y','n' and 'c'?
//      let ch='c';
//      switch(ch){
//      case 'y' :
//       console.log('YES')
//      break;
//      case 'n' :
//       console.log('NO')
//      break;
//      case 'c' :
//       console.log('CANCEL')
//      break;

//       default:
//       console.log('incorrect character')         
//      }
// #################################################################################zx
// Que.4 Wap to check that enter number is positive or negative using switch case ?
//      let num = 0
//      switch (true) {
//      case (num > 0):
//          console.log("Nuber is positive.");
//      break;
//      case (num < 0):
//          console.log("Number is negative.");
//      break;
//      default:
//          console.log("Invalid number.");
//      }
// ##########################################################################################