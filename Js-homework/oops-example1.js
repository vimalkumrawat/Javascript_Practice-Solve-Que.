// Opps in JavaScript
// JavaScript supports Object-Oriented Programming (OOP) principles through its prototype-based architecture. This tutorial will cover key concepts such as classes, objects, data abstraction, data encapsulation, polymorphism, and inheritance, providing step-by-step examples for each.

// Four Pillars of Object-Oriented Programming
// OOP languages adhere to four primary principles:

// 1) Encapsulation: Combining data and methods within objects to ensure data security.
// 2) Inheritance: Allowing classes to inherit properties and methods from parent classes, promoting code reuse and enabling method overriding.
// 3) Polymorphism: Using the same function in different forms to reduce repetition and enhance code utility.
// 4) Abstraction: Hiding complex implementation details to simplify usage.

// Creating Objects in JavaScript
// In JavaScript, everything is an object. Arrays, functions, and even primitive values extend the functionality from prototype objects. Here are three ways to create objects
//============================================================================
// Using an Object Literal

// let student = {
//     rno: 1001,
//     name: "stu1",
//     branch: "cs",
//     fees: 45000,
//     stuinfo: function () {
//         return `rno.is ${this.rno} name is ${this.name} branch is ${this.branch} fees is ${this.fees}`
//     }
// }
// let obj = student.stuinfo
// console.log(obj);
//================================
//calculate simple interest

// let SI = {
//     p : 5000,
//     r : 10,
//     t : 5,

//     int : function (){
//         let res = (this.p *this.r *this.t) / 100
//         return `result is ${res}`
//     }
// } 
// let obj = SI.int()
// console.log(obj);

// 2nd method =======

// let si = {
//     calcinput: function(p,r,t){
//         this.p = p
//         this.r = r
//         this.t = t
//     },
//     calcsi: function(){
//         let res = (this.p * this.r * this.t)/100
//         return `result is ${res}`
//     }
// }
// si.calcinput(12000, 2, 2);
// let result = si.calcsi();
// console.log(result);

// output = result is 480

//========================================================

// 2nd Using an Object Constructor
//
// function student(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.displayinfo = function() {
//        console.log (`${firstname} ${lastname}`);
//     };
// }
// let obj = new student("amit", "kumar");
// obj.displayinfo()
// let obj1 = new student("vimal", "kumrawat");
// obj1.displayinfo()

//====================================================

// calculate simple interest by constructor

// function SI(p,r,t){
//     this.p = p
//     this.r = r
//     this.t = t
//     this.SIinfo = function(){
//         let SI = (this.p * this.r * this.t)/100
//         console.log(`SI is ${SI}`);
//     }
// }
// let obj = new SI(12000,2,2) // constructor based object 
// obj.SIinfo()

//====================================================================

// 3rd Using Object.create() Method in javascript

// const student = {
//     first_name: 'Mary',
//     last_name: 'Green',
//     display_full_name: function() {
//         return `${this.first_name} ${this.last_name}`;
//     }
// };

// const student1 = Object.create(student);
// student1.last_name = "Smith";
// const student2 = Object.create(student);
// student2.last_name = "Smithgrbgfb";

// console.log(student1.display_full_name());
// console.log(student2.display_full_name());

// let student = {
//     rno: 1001,
//     name: "stu1",
//     branch: "cs",
//     fees: 45000,
//     stuinfo: function () {
//         return `rno is ${this.rno}, name is ${this.name}, branch is ${this.branch}, fees is ${this.fees}`;
//     }
// };

// let obj = Object.create(student);
// obj.rno = 1002;
// obj.name = "stu2";

// console.log(obj.stuinfo());
