// https://www.codewars.com/kata/514b92a657cdc65150000006

/* 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

*/

function solution(number, x, y) {
  let toReturn = [];

  for (let index = 1; index < number; index++) {
    let mX = index % x == 0;
    let mY = index % y == 0;

    if (mX || mY) toReturn.push(index);
  }

  return toReturn.reduce((acc, current) => acc + current, 0);
}

let value = 10;
let expected = solution(10, 3, 5) == 23;

console.log(expected);
