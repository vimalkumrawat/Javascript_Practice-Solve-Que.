// que.1) Write a program to swap two variables 
var a = 10;
var b = 20;
console.log('Before swap');
console.log("value of a is", a , "value of b is", b);
var c = a;
var a = b;
var b = c;
console.log('after swap');
console.log("value of a is", a ,"value of b is", b);
// ######################################################################
// que.2) Write a program to calcute square and cube 
var num = 5;
var sq = num*num;
console.log("square is", sq);
var cube = num*num*num;
console.log("cube is", cube);

// ######################################################################
// que.3) Write a program to calcute simple interest principle amount 800rs, rate 5%, time 2 year
var p = 800;
var r = 5;
var t = 2;
var SI = (p * r * t)/100;
console.log("simple interest is ", SI);
// ######################################################################
// que.4) Write a program to calcute compound interest 
var p = 800; // Principal amount
var r = 5;   // Rate of interest (in percentage)
var t = 2;   // Time (in years)

// Calculate compound interest
var A = p * Math.pow((1 + r / 100), t); // A = P(1 + r/n)^(nt) for n = 1
var CI = A - p; // CI = A - P
console.log("Compound interest is ", CI);
// ######################################################################
// que.5) Write a program to calcute area to triangle 
var base = 10; 
var height = 12; 
var area = base*height/2
console.log("Triangle area is", area);
// ######################################################################