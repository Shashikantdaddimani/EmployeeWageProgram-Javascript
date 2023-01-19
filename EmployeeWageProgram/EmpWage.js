
/*
 getWorkingHours is Method for Checking Employee Working hours
 */
function getWorkingHours(empCheck){
    switch(empCheck){
        case Is_Part_Time:
            return Part_Time_Hours;
        case Is_Full_Time:
            return Full_Time_Hours;
        default:
            return 0;

    }
}
const Is_Part_Time=1;
const Is_Full_Time=2;
const Part_Time_Hours=4;
const Full_Time_Hours=8;
const Wage_Per_Hour=20;

let empHrs=0;
let empCheck =Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage =empHrs* Wage_Per_Hour;
console.log("Emp Wage: "+empWage);