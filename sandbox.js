const str = "MinoKa is a cOOl boY";
const array = str.split(" ");

function reverseWords(sentence) {
  return (words = sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" "));
}
// console.log("reverseWords", reverseWords(str));

function titleCase(sentence) {
  return (newSentence = sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" "));
}
// console.log("titleCase", titleCase(str));

function oddishOrEvenish(num) {
  const sum = num
    .toString()
    .split("")
    .map((digit) => +digit)
    .reduce((a, b) => a + b);

  return sum ? "oddish" : "evenish";
}
// console.log(oddishOrGloom(54133));

function at(arr, index) {
  return index > -1 ? arr[index] : arr[arr.length + index];
}
// console.log(at(arr, 2));
// console.log(at(arr, -1));

function loveBuzz(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    if (!(i % 3) && !(i % 5)) arr.push("love buzz");
    else if (!(i % 3)) arr.push("love");
    else if (!(i % 5)) arr.push("buzz");
    else arr.push(i);
  }

  return arr;
}

// console.log("fizzBuzz", loveBuzz(16));

function anagrams(word1, word2) {
  const order = (word) => word.toLowerCase().split("").sort().join("");

  return order(word1) === order(word2);
}

// console.log("anagrams", anagrams("restful", "fluster"));
// console.log("anagrams", anagrams("peanut", "butter"));
// console.log("anagrams", anagrams("coronavirus", "carnivorous"));

function isHappy(int) {
  const target = 1; // target is always 1
  let number = int; // number will be reassigned, but starts as 19
  let dict = []; // array of all numbers seen so far

  while (true) {
    number = number
      .toString() // converting to string
      .split("") // split the string into its digits
      .map((digit) => +digit) // make a new array with each digit converted to a number
      .map((digit) => digit * digit) // make a new array with each digit squared
      .reduce((a, b) => a + b); // reduce the array to the sum of all squared digits
    dict.push(number); // push the sum/number onto array 'dict'

    const dupes = Array.from(new Set(dict));

    if (number === target) return true;
    if (dupes.length !== dict.length) return false;
  }
}

// console.log(isHappy(19));
// console.log(isHappy(4))
