/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/

function sumEven(starting, ending) {
  let j = 0;
  for (let i = starting; i <= ending; i++) {
    if (i % 2 === 0) {
      j += i;
    }
  }
  return j;
}

console.log("The sum is equal to " + sumEven(50, 100));
