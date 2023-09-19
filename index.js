// Code your solution in this file!
function distanceFromHqInBlocks (someValue){
  if(someValue<42){
    return(42-someValue);
  }
  else{
    return(someValue-42);
  }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
  
}
 
function distanceTravelledInFeet(start,destination){
  if(start>destination){
    return((start-destination)*264);
  }
  else{
    return((destination-start)*264);
  }
}

function calculatesFarePrice(start,destination){
  const feet=distanceTravelledInFeet(start,destination)
   if (feet<=400){
    return 0;
   }
   else if(
    feet>=400 && feet<=2000){
      return((feet-400)*0.02);
   }
   else if(feet>=2000 && feet<=2500){
    return 25;
   }
   else if(feet>2500){
    return "cannot travel that far";
   }

}
  

