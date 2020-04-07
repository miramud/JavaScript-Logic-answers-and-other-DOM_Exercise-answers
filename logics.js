// ############ FIZZBUZZ
/* const fizzbuzz = () => {
  let newArr = [];
  for (let i = 1; i < 101; i++) {
    // if (i % 3 === 0) newArr.splice(i - 1, 1, 'Fizz');
    // if (i % 5 === 0) newArr.splice(i - 1, 1, 'Buzz');
    // if (i % 15 === 0) newArr.splice(i - 1, 1, 'FizzBuzz');
    if (i % 15 === 0) newArr.push('fizzBuzz');
    else if (i % 3 === 0) newArr.push('fizz');
    else if (i % 5 === 0) newArr.push('Buzz');
    else newArr.push(i);
  }
  return newArr;
};
console.log(fizzbuzz()); */

// ####### WITHOUT THE USE OF ARRAY ########
/* const fizzbuzz = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i % 15 === 0) document.writeln('FizzBuzz <br>');
        else if (i % 3 === 0) document.writeln('Fizz <br>');
        else if (i % 5 === 0) document.writeln('Buzz <br>');
        else document.writeln(i + '<br>')
    }
}
fizzbuzz(1, 100) */

// ######## SHORTEST SOLUTION EVER #########
// for (let i = 0; i < 100; i++) console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
// ############## OR ####################
/* const fizzbuzz = (a, b) => {
    for (let i = a; i <= b; i++) document.write((i % 3 ? '' : 'Fizz <br>') + ((i % 5) ? '' : 'Buzz <br>') || i + '<br>')
}
fizzbuzz(1, 100) */

/* const fizzbuzz = (a, b) => {
    const newArr = []
    for (let i = a; i <= b; i++) newArr.push((i % 3 ? '' : 'Fizz') + ((i % 5) ? '' : 'Buzz') || i)
    return newArr
}
console.log(fizzbuzz(parseInt(prompt("Starting number")), parseInt(prompt('Ending number'))))
 */

// ###### FIBONACCI SERIES
/* let a = 0
let b = 1
// let c = 1
document.writeln(`${a} <br>`)
document.writeln(`${b} <br>`)
// document.writeln(`${c} <br>`)

for(let i = 1; i < 12; i++){

    // var d = a + b + c
    var c = a + b
    a = b
    b = c
    // c = d
    // document.writeln(`${d} <br>`)
    document.writeln(`${c} <br>`)
} */

// ###### FACTORIAL
/* 
let num = parseInt(prompt("Please input a number"))
let factorial = 1
if (num === 0) {
    document.writeln(`1 <br>`)
} else {
    for (let i = num; i >= 1; i--) factorial *= i;
    document.writeln(`${factorial} <br>`)
} 
*/

// ###### OR #######

// ###### Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100 ########

/* 
const check = (a, b) => a === 100 || b === 100 || a + b === 100 ? true : false;

// ####### OR ###########
// const check =(a, b)=> a === 100 || b === 100 || (a + b) === 100

document.writeln(check(10, 70))
document.writeln(check(50, 100)) */

// ######## Write a JavaScript exercise to get the extension of a filename. #########
/* 
const file = "miracle/image.Folder/piture.png"

/* const getXtn =(a)=> {
    const b = a.split('.')
    console.log(`.${b[b.length - 1]}`)
}

const getXtn=(s)=> s.slice(s.lastIndexOf('.'))

console.log(getXtn(file))
 */

// ######## Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string. #######

/*const addNew =(str)=> {
    const s = str.split(' ')
    return s[0] === "New!" ? s.join(' ') : `New! ${s.join(' ')}`
}
*/
// ######### OR #######
/* const addNew =(str)=> str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('New! Jerry'))
 */

// ####### Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy #########
/* 
const d = new Date().getDate()
const m = new Date().getMonth() + 1
const y = new Date().getFullYear()

console.log(`${d}/${m}/${y}`)

 */

// ####### Write a JavaScript program to extract the first half of a string of even length. #######

/* const halfOfEven =(str)=> (str.length % 2 === 0) ? str.slice(0, (str.length/2)) : str;

console.log(halfOfEven('Oracle'))
 */

//  ######## Write a JavaScript program to concatenate two strings except their first character. ########
/* 
const concatenate =(str1, str2)=> `${str1.slice(1)}${str2.slice(1)}`
console.log(concatenate('miracle', 'oracle'))
 */

// ######### Given two values, write a JavaScript program to find out which one is nearest to 100 ##########
/* 
const nearest =(a, b)=> (100 - a) < (100 - b) ? a : b

console.log(nearest(98,103))
 */

// ####### Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more, ifnot, the original string is returned. ########
/* 
const change = (str)=> str.length > 3 ? str.slice(-3) + str + str.slice(-3) : str

console.log(change('change'))
 */

// ######## Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character. ########
/* 
const strFunction = (str, char) => {
    const charAvailable = str.split('').filter(letter => letter === char);
    return charAvailable.length >= 2 && charAvailable.length <= 4
}
console.log(strFunction('ooh', 'o'),
    strFunction('oh', 'o'),
    strFunction('oooh', 'o'),
    strFunction('ooooh', 'o'),
    strFunction('oooooh', 'o')) 
*/

// #### Write a JavaScript program to find the number of even digits in a an array of integers
/* 
const evenFunction = (arr) => {
    const evenArray = arr.filter(even => even % 2 === 0)
    return evenArray
  }
  console.log(evenFunction([33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32])) 
*/

// ######### Write a JavaScript program to find the number of even values up to a given number
// const evenValues = (a, b) => {
//   const arr = [];
// for (let i = a; i <= b; i++) arr.push(i);
// const even = arr.filter(even => even % 2 === 0).length
// return even
// };
// console.log(evenValues(1, 15));
// ########## WITHOUT A FUNCTION
/* const arr = []
for (let i = 1; i <= 20; i++) arr.push(i);
console.log(arr.filter(even => even % 2 === 0).length)
 */

// ########### Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

/* const orderFunction = (str) => str.split('').sort((a, b) => a > b ? 1 : -1).join('')
console.log(orderFunction('webmaster')) */

// ######### Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

/* const vowels = (str) => {
    const vowelRegex = ['a', 'e', 'i', 'o', 'u']
    const newArray = []
    const strArray = str.split('')
    strArray.forEach(letter => vowelRegex.forEach(vowel => letter === vowel ? newArray.push(letter) : false))

    return newArray.length
}
console.log(vowels('jayodeen')) */

// ######## Write a JavaScript function to extract unique characters from a string.

/* const unique = (str) => new Set(str.split(''))
console.log(unique('jaydeen'))
console.log(unique('drugssssssshhhhhhhaaaaaaasssdddddrrruuuuggghhhhhsssss')) */

// ########## Write a JavaScript function to find the first not repeated character
// Example string: 'abacddbec'
// Expected output: 'e'

const notRepeated = (str) => str.split('').filter((letter, index, array) => array.filter(item => letter === item).length === 1)[0];

console.log(notRepeated('"abacabad"'))
// console.log(notRepeated('abacddbec'))

// ########### SORTED SQUARED ARRAY
/* const sortedSqArray = (arr) => arr.map(el => el === null ? "INVALID INPUT" : el * el).sort((a, b) => a > b ? 1 : -1)

console.log(sortedSqArray([-7, -3, -1, 4, 8, 12]))
console.log(sortedSqArray([1, 2, 3]))
console.log(sortedSqArray([-3, -2, -1])) */

// ######### Write a JavaScript program to generate a random hexadecimal color code.

/* const getHexColor = () => {
    const hexArr = []
    for (let i = 0; i < 6; i++) hexArr.push(Math.floor(Math.random() * 16).toString(16));
    return "#" + hexArr.join('')
}

document.body.style.backgroundColor = getHexColor()
setInterval(() => document.body.style.backgroundColor = getHexColor(), 10000) */

// ABSOLUTE DIFFERENCE OF THE PRIMARY AND SECONDARY DIAGONALS OF A SQUARE MATRIX
/* const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];
let sum1 = 0;
let sum2 = 0;
let x = 0;
let y = matrix.length - 1;

for (let i = 0; i < matrix.length; i++) {
  sum1 += matrix[i][x];
  x = i + 1;
  sum2 += matrix[i][y];
  y = y - 1;
}

console.log(sum1, sum2, Math.abs(sum1 - sum2), Math.sin(60));
 */

// KADANE'S ALGORITHM - MAXIMUM SUM OF SUBARRAY IN AN ARRY
// E.g const arrayNums = [-2, 2, 5, -11, 6] => 7, which is the sum of [2, 5] subarray
/* const kadanes = arr => {
    const subArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) subArr.push(arr[i] + arr[i + 1]);
        subArr.push(arr[i]);

    }
    //   return subArr;
    return Math.max(...subArr);
};
console.log(kadanes([-10, -20, -11])); */

/* const makeArrayConsecutive2 =(statues)=> {
    const newArr = statues.sort((a,b)=> a - b);
    for(let i = 0; i < newArr.length; i++)
        if (newArr[i] - newArr[i + 1] > 1){

        }
} */

/* function makeArrayConsecutive2(statues) {
  statues = statues.sort((a, b) => a - b);
  const subArr = [];
  for (let i = 0; i < statues.length; i++) {
    if (statues[i + 1] - statues[i] > 1) {
      subArr.push(statues[i] + 1);
      statues.push(statues[i] + 1);
    }
    statues = statues.sort((a, b) => a - b);
  }
  return subArr.length;
} */

/* 

After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9.

example 1

There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

For

matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
the output should be
matrixElementsSum(matrix) = 9.

example 2

Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

*/

/* const setAny = arr =>
    arr.filter(
        (value, i, array) => array.filter((v, index, ar) => value === v).length > 1
    );
console.log(setAny([2, 1, 3, 5, 3, 2])); */


/* const str = "Scrabble";
const newWord = str.toLowerCase().split('').sort().join('');
console.log(newWord) */



// FIRST DUPLICATE

/* const firstDuplcate = a => {
    // THIS FIRST SOLUTION PASSED 21/23 TEST CASES OF BOTH TIME AND SOLUTION.
    // THE SOLUTION IS CORRECT, BUT THE SPEED LIMIT IS EXCEEDED IN TESTS 22 & 23.
     const newArr = []
    for (let i = 0; i < a.length; i++) {
        if (newArr.includes(a[i])) {
            return a[i]
        } else {
            newArr.push(a[i])
        }
    }   
    return -1
    


    // SECOND AND MOST EFFICIENT SOLUTION
    for (let i = 0; i < a.length; i++) {
        if (a[Math.abs(a[i]) - 1] < 0) {
            return Math.abs(a[i])
        } else {
            a[Math.abs(a[i]) - 1] = a[Math.abs(a[i]) - 1]
        }
    }
    return -1

}

console.log(firstDuplcate([2, 1, 3, 5])) */