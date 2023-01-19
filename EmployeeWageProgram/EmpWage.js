const Is_Part_Time=1;
const Is_Full_Time=2;
const Part_Time_Hours=4;
const Full_Time_Hours=8;
const Wage_Per_Hour=20;
let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck){
    case Is_Part_Time:
        empHrs = Part_Time_Hours;
        break;
    case Is_Full_Time:
        empHrs = Full_Time_Hours;
        break;
    default:
        empHrs=0;

}
let empWage = empHrs* Wage_Per_Hour;
console.log("Emp wage: "+empWage);