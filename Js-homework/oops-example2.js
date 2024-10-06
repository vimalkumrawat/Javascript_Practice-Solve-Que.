// javascript not support class keyword it is a prototype based and does not have traditional classs, the class keyword introduced in ES-6

// class and object

// Class:- A blueprint for creating objects (instances). It encapsulates data for the object.

// Object:- An instance of a class. It contains properties and methods defined by its class.

// (class ek block hai , class ek group hai)

// fruit (group hai) :- mango, apple (yeh object hai)


// syntax to create class 

// class Classname 
// {
//     constructor ()
//     {

//     }
//     methodName(parameter)
//     {

//     }
//     methodName(parameter)
//     {

//     }

// }

// 1) instance variable yah this word se start hoga 

// 2) static variable isme this nahi lagta hai 


// class Student {
//     acceptInfo(rno,name){
//         this.rno = rno
//         this.name = name
//     }
//     displayInfo()
//     {
//         console.log(`rno ${this.rno},name is ${this.name}`);
//     }
// }

// let obj = new Student()
// obj.acceptInfo(1001,"stu1")
// obj.displayInfo()

// let obj1 = new Student()
// obj1.acceptInfo(1002,"stu2")
// obj1.displayInfo()

//=============================================
// calculate simple interest
//
// class SI{
//     acceptInfo(p,r,t){
//         this.p = p
//         this.r = r
//         this.t = t
//     }
//     displayInfo()
//     {
//         let res = (this.p * this.r * this.t)/100
//         console.log(`result is ${res}`);
//     }
// }
// let obj = new SI()
// obj.acceptInfo(12000,5,2)
// obj.displayInfo()

// output :- result is 1200

//================================================

// class EMployee{
//     acceptInfo(empid,empname,job,salary){
//         this.empid = empid
//         this.empname = empname
//         this.job = job
//         this.salary = salary
//     }
//     displayInfo()
//     {
//         console.log(`id is: ${this.empid},name is: ${this.empname},job is: ${this.job},salary is :${this.salary}`);
//     }
// }
// let obj = new EMployee()
// obj.acceptInfo(100,"Vimal","developer",12000)
// obj.displayInfo()
//==================================================================

//Wap to check prime no. using accept() and display() ?
//
// class prime {
//     acceptInfo(number) {
//         this.number = number
//     }
//     displayInfo() {
//         let factor = 0
//         for (let i = 0; i <= this.number; i++) {
//             if (this.number % i == 0) {
//                 factor++
//             }
//         }
//         if (factor == 2) {
//             console.log("prime number ");
//         } else {
//             console.log("not a prime number");
//         }
//     }
// }

// let obj = new prime()
// obj.acceptInfo(7)
// obj.displayInfo()
//=============================================================

// class factorial{
//     acceptInfo(number){
//         this.number = number
//     }
//     displayInfo(){
//         let factorial = 1
//         for(let i = 1; i <= this.number; i++){
//             factorial = factorial*i
//         }
//         console.log(factorial);
//     }
// }
// let obj = new factorial()
// obj.acceptInfo(0)
// obj.displayInfo()

// =============================================

class marks{
    acceptInfo(phy,chem,math,eng,hin){
        this.phy = phy
        this.chem = chem
        this.math = math
        this.eng = eng 
        this.hin = hin 
    }
    displayInfo(){
        let flag=true
    let totalmarks=0
    let c=0
    let fsubject=""
    let message=""
    let gm=0
    let mark1 = [this.phy,this.chem,this.math,this.eng,this.hin]
    for(let m in mark1){
    if(mark1[m]<0 || mark1[m]>100){
        flag=false;
        message=`Invalid marks in ${m} subject, Assigned Marks should be 0 to 100`
        break
    }
    else
    {
        if(mark1[m]<33){
            fsubject+=m+" "
            gm=mark1[m]
            c++;
        }
        else{
            totalmarks+=mark1[m];
        }
    }
}

if(flag){
   if(c==0 || c==1 && gm>=28){
      
      let per =(c==0)?totalmarks/5:(totalmarks+33-gm)/5;
      if(per>33 && per<45){
        message=`Congrates you are pass with third division and percentage is  ${per.toFixed(2)}`
      }
      else if(per<60){
          message=`Congrates you are pass with second division and percentage is  ${per.toFixed(2)}`
      }
      else
      {
        message=`Congrates you are pass into first division and percentage is ${per.toFixed(2)}`
      }
      if(c==1){
        message += `Pass by grace and grace mark is ${(33-gm)} grace subject is ${fsubject}`
      }
   }
   else if(c==1){
    message=`Try again you are supp in ${fsubject}`
   }
   else
   {
    message=`Try again you are failed in ${fsubject}`
   }
   console.log(message)
}
else
{
    console.log(message)
}
    }
}

let obj = new marks()
obj.acceptInfo(35,60,100,100,100)
obj.displayInfo()