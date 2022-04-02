"use restrict";
const vowels = ["a", "e", "i", "o", "u"];
const numbers = [11, 22, 32, 44];
let words = ["Anil", "Ashish", "Sachin", "Siddhant", "Sayal"];

//testing function
console.log("5" == 5); //true
console.log("05" == 5); //true
console.log("05" == "5"); //false
console.log("5" === 5); //false
console.log(5.0 == 5); //true
console.log(5.0 === 5); //true
console.log(!!"5"); //!! give the boolean value of any variable
console.log(!!"");
console.log(NaN === NaN); //false
console.log(NaN == NaN); //false
let backticks = `TEST::${vowels}`; //can wrapper ','' and use other variable
console.log(backticks);
//end of testing

// 1.	Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
const maxOfTwo = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(maxOfTwo(1, 2));

//2.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log(maxOfThree(1, 2, 3));

//3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function (char) {
  return vowels.includes(char.toLowerCase());
};
console.log(isVowel("x"));

//4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
const sum = function (numbers) {
  let summation = 0;
  numbers.forEach((number) => (summation = summation + number));
  return summation;
};

const multiply = function (numbers) {
  let summation = 1;
  numbers.forEach((number) => (summation = summation * number));
  return summation;
};
console.log(sum(numbers));
console.log(multiply(numbers));

//5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
const reverse = function (str) {
  //convert string to char array using spread [...str] or split split('')
  let strArray = [...str];
  return strArray.reduce(function (accum, number) {
    return number + accum;
  }, "");
};
console.log(reverse("jag testar"));

//6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
const findLongestWord = function (words) {
  return words.reduce(function (accum, word) {
    accum = word.length > accum.length ? word : accum;
    return accum;
  }, "");
};
console.log(findLongestWord(words));

//7.	Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.
const filterLongWords = function (words, i) {
  return words.filter((word) => word.length > i);
};
console.log(filterLongWords(words, 5));

//8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
const computeSumOfSquares = function (numbers) {
  return numbers.reduce(function (accum, number) {
    accum = accum + number * number;
    return accum;
  }, 0);
};
console.log(computeSumOfSquares(numbers));

//9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.
const printOddNumbersOnly = function (numbers) {
  return numbers.filter((number) => number % 2 === 1);
};
console.log(printOddNumbersOnly(numbers));

//10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
let computeSumOfSquaresOfEvensOnly = function (numbers) {
  return numbers
    .filter((number) => number % 2 === 0)
    .reduce(function (accum, number) {
      accum = accum + number * number;
      return accum;
    }, 0);
};
console.log(computeSumOfSquaresOfEvensOnly(numbers));

//11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 
const sumByReduce = function (numbers) {
  return numbers.reduce((accum, number) => accum + number, 0);
};

const multiplyByReduce = function (numbers) {
  return numbers.reduce(function (accum, number) {
    return accum * number;
  }, 1);
};
console.log(sumByReduce(numbers));
console.log(multiplyByReduce(numbers));

//12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
const findSecondBiggest = function (numbers) {
  return numbers.reduce(function (accum, number) {
    accum=accum>number?accum:number;
    return accum;
  }, -Infinity);
};
arr=numbers;
console.log(findSecondBiggest(arr));
arr[arr.indexOf(findSecondBiggest(arr))] = -Infinity; 
console.log(findSecondBiggest(arr));

//13.	Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
const printFibo=function(n,a,b){
  let fibo=[];
  fibo.push(a);
  fibo.push(b);
  let temp=0;
    for(let i=2;i<n;i++){
      temp=a+b;
      a=b;
      b=temp;
      fibo.push(temp);
    }
    return fibo;
}
console.log(printFibo(10,0,1));

