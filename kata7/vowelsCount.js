// https://www.codewars.com/kata/54ff3102c1bad923760001f3

/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  let vowelsCount = 0;

  let vowels = "aeiou";

  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

let string = "Ceci est un test";

// expected value = 5

console.log(getCount(string));
