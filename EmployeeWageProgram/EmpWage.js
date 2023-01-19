

 const Is_Part_Time=1;
 const Is_Full_Time=2;
 const Part_Time_Hours=4;
 const Full_Time_Hours=8;
 const Wage_Per_Hour=20;
 const Num_Of_Working_Day =20;
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
 let totalEmpHrs =0;
 for(let day =0;day<Num_Of_Working_Day;day++){
     let empCheck = Math.floor(Math.random()*10)%3;
     totalEmpHrs +=getWorkingHours(empCheck);
 
 }
 let empWage =totalEmpHrs * Wage_Per_Hour;
 console.log("Total Hrs: "+totalEmpHrs+"Emp Wage: "+empWage);
 