// // Que.1) Wap to store 5 subject name and marks and calculate result , division and percentage also provide supplymentry pass by grace and fail subject status ? 


// let student = {
//     maths: 70,
//     english: 65,
//     hindi: 48,
//     science: 70,
//     physics: 70,
// };

// let total = 0
// let grace = 33
// for(let key in student){
//  total += student[key]
//  if (student[key] >= 28 && student[key] < 33){
//     grace = 33 - student[key]
//     console.log("Grace number is ", grace , key);
//  }
//  else{
//     if(student[key] < 28){
//         console.log("fail in", key,student[key]);
//     }
//  }
// }

// let per = (total / 500) * 100;
// console.log("total marks =",total + ", percentage = ", per + '%');
// let division = "Division fail"
// if (per >= 60 && per < 100) { 
//     division="1st Division pass"
//     // console.log("student Pass");
// }else if (per < 60 && per > 45){
//     division="2nd Division pass"
//     // console.log("student Pass");
// }else if (per < 45 && per >= 33){
//    division="3rd Divison pass"
//    // console.log("student Pass");
// }else if (per < 33){
//     division
// }
// console.log(division);

//================================================================================================

// 2nd method by shiva sir 

let marks = {
    phy:35,
    chem:35,
    math:30,
    eng:45,
    hin:60
}
let flag=true
let totalmarks=0
let c=0
let fsubject=""
let message=""
let gm=0
for(let m in marks){
    if(marks[m]<0 || marks[m]>100){
        flag=false;
        message=`Invalid marks in ${m} subject, Assigned Marks should be 0 to 100`
        break
    }
    else
    {
        if(marks[m]<33){
            fsubject+=m+" "
            gm=marks[m]
            c++;
        }
        else{
            totalmarks+=marks[m];
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

