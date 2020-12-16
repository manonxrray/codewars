// https://www.codewars.com/kata/5a262cfb8f27f217f700000b

/*

In this Kata, you will be given two strings a and b and your task will be to return the characters that are NOT common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.

*/

function filterOut(x, y) {
  return [...x]
    .filter((element) => {
      if (y.includes(element)) return false;
      return true;
    })
    .join("");
}

function solve(a, b) {
  let firstString = filterOut(a, b);

  let secondString = filterOut(b, a);

  return firstString + secondString;
}

let test1 = "johnny halliday";
let test2 = "laurent voulzy";

// expected = "jhhidluretvuz"

console.log(solve(test1, test2));
