// Exercise 1 Section

//Reminder "return ends the function" at the line

function printOdds(count) {
    //-5 5 (how to get negative)
    //We almost dont care if they put a negative in
    //we only care, beacuse we meed to put a - sign
    // Absolute value
const sign = count/Math.abs(count)
    if (count < 0){
        for (let i = 0; i < count; i--) {
            //if i is an odd number
          if (i % 2 != 0) {
            //Then
            console.log(i);
          }
        }
        console.log("Please provide a non-negative count")
    }
    //need to "for" looop.
    for (let i = 1; i < count; i++) {
        //if i is an odd number
      if (i % 2 != 0) {
      
        console.log(i*sign);
      }
    }
  }
printOdds(40)



// Exercise 2 Section
//pringodd(40)
//string interpolation
function checkAge(userName,age) {
    const olderthensixteen = `Yes! ${userName}, you can drive!`;
    const youngerthensixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    
    const yearsUntilDrivingAge = 16- age;

    if (age < 16) {
      console.log(`Not acceptable ${yearsUntilDrivingAge} years until you can drive`);
    } else {
      console.log("Right age");
      
    }
}

checkAge ('Tom Holland',11);

//Excerise 3
//3,2)
//..(o,0)
//(0,5)


function Quardrants(x, y) {
  if (y == 0 && y == 0) {
      console.log("Origin Point");
  } else if (x == 0) {
      console.log("X-axis");
  } else if (y == 0) {
      console.log("Y-axis");
  } else if (y == 0) {
      console.log("X-axis");
  } else if (x > 0) {
      console.log("Right side of the plane");
  }

  if (y > 0) {
      console.log("Quadrant 1");
  } else {
      console.log(`(${x}), ${y}) is on the y-axis`);
  }

  if (y === 0 && x !== 0) {
      console.log(`The point (${x}, ${y}) is at the x-axis`);
  } else if (x === 0 && y === 0) {
      console.log(`The point (${x}), ${y} is at the start`);
  } else {
      if (x > 0 && y > 0) {
          console.log(`The point (${x}), ${y} is in Quadrant 1`);
      }
  }
}

/* Excercise 4*/

function triangleType(side1, side2, side3) {
  if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    if (side1 === side2 && side2 === side3) {
      console.log("Equilateral triangle");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      console.log("Isosceles triangle");
    } else {
      console.log("Scalene triangle");
    }
  } else {
    console.log("Invalid triangle");
  }
}
triangleType (2,2,2);


//Excercise 5

function dataPlan(usage, day, planLimit) {
  const remainingDays = 30 - day;
  const averageUsage = Math.round((usage / day) * 100) / 100;
  const netAverage = Math.round((planLimit / 30) * 100) / 100;
  const exceedUsage = Math.round((averageUsage * 300 * 100) / 100);
  const averageRemainingData = Math.round(((planLimit - usage) / remainingDays) * 100) / 100;
  const extraData = planLimit - (averageUsage * 30);

  console.log(`${day} days used, ${remainingDays} days remaining`);
  console.log(`Average daily usage: ${averageUsage} GB`);
if (averageUsage > netAverage){
  console.log (`You are EXCEEDING your average daily usage (${netAverage}) GB/day`);
  console.log(`Average daily use`);
}
}
// Example usage:
dataPlan(15, 10, 50); 
// Replace these values with actual usage, day, and plan limit
