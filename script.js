//your JS code here. If required.
let num = prompt("Enter a valid year");


num = Number(num);

function daysofAYear(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    return 366; 
  } else {
    return 365; 
  }
}

alert(daysofAYear(num)); 
