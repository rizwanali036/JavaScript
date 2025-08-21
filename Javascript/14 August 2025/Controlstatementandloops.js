// If else

var tomorrow =  "sunny";
if (tomorrow == "rain"){
    console.log('Take a rain coat');
}else{
    console.log('No need to take a rain coat');
}


var year = 2019;
if(year % 4 === 0){
  if(year % 100 === 0){
    if(year % 400 === 0){
      console.log("The year " + year + " is a leap year");
     }else{
       console.log( "The year " + year + " is not a leap year");
     }
   }else{
     console. log("The year " + year + " is a leap year");
   }
 }else{
  console.log("The year "+ year + " is not a leap year");

 }