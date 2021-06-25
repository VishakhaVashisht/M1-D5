/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1,l2)
{
  return l1*l2
}

let result =area(3, 5)

console.log(result)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum =function (a,b){
  if(a===b){
    let result = (a+b) * 3
    return result;
  }
  else{
    let result= a+b
    return result;
  }
}
let sumOfNumbers = crazySum(3,3)
console.log(sumOfNumbers)
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(a)
{
  if (a>19)
  {
    let difference = (a -19)**3
    return difference;
  }
  else{
    difference = 19-a
    return difference
  }
}

let resultDiffer= crazyDiff(34)
console.log(resultDiffer)
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
/* WRITE YOUR CODE HERE */
const boundary = function(n)
{
  if((n>=20 && n<=100) || n==400){
    let numberResult = true
    return numberResult
  }
  else{
    numberResult=false
    return numberResult
  }
}

let checkNumber= boundary(9)
console.log(checkNumber)


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

const strivify = function(stringName){
  return stringName.startsWith('Strive') ? stringName : 'Strive' + stringName
}

console.log(strivify("Strive"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
const check3and7 = function(positiveNumber){

  if(positiveNumber % 3 ==0 || positiveNumber % 7 == 0 ){
    return true
  }
  else{
    return false
  }
}

console.log(check3and7(5))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

const reverseString = function(str){
  return str.split("").reverse().join("");
}
console.log(reverseString('Strive'))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
/* WRITE YOUR CODE HERE */
function upperFirst(stringWord){
  return stringWord.toUpperCase()
}

console.log(upperFirst("convert first letter in uppercase!"))


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/


/* WRITE YOUR CODE HERE */
function cutString(string)
{
  return string.slice(1,-1)
}
console.log(cutString("Helloo!"))
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

function giveMeRandom(n){
  var randomNumber = new Array(n)
  for(let i =0; i<n;i++){
    randomNumber[i] = (i + 1).toString();
 
 }
 return randomNumber
}
console.log(giveMeRandom(6))
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
