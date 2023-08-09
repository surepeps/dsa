/**
 * 1. Add Length Task
 * https://www.codewars.com/kata/559d2284b5bb6799e9000047
 */

function addLength(str) {
    // Split the sentence into words by the space between them
    let newSentence = str.split(" ");
    
    //cre ate an empty array
    let resultArray = [];

    // loop through each of the values in the array above
    for(let i in newSentence){
        resultArray.push(newSentence[i] + " " + newSentence[i].length)
    } 

    return resultArray;
}

/**
 * 2. Lario and Muigi Pipe Problem
 * https://www.codewars.com/kata/56b29582461215098d00000f
 */

function pipeFix(numbers){
    // get the length of the array
    let numLeght = numbers.length;

    // get the first value in the array
    let numFirst = numbers[0];

    // get the last value in the array
    let numLast = numbers[numLeght - 1];

    // create empty array
    let resultNums = [];

    for(let i = numFirst; i <= numLast; i++){
        resultNums.push(i);
    }

    return resultNums;
}

/**
 * 3. Miles per gallon to kilometers per liter
 * https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
 */
function converter (mpg) {
    if (mpg < 1) {
        return 0;
    }

    let oneMpg = 4.54609188; // in Liters
    let oneMile = 1.609344; // In Kilometers

    // convert mpg to liter
    let result = mpg * (oneMile / oneMpg);
  
    // convert to 2 decimal places
    result = result.toFixed(2);

    // convert to float
    result = parseFloat(result);

    return result;
}


/**
 * 4. Gravity Flip
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
 */
const flip = (d, a) =>{
    let aLenght = a.length;

    return (d == 'R') ? a.sort((f,s) => f - s) : a.sort((f,s) => s - f);

}


/**
 * 5. Short Long Short
 * https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
 */
function solution(a, b){
    // check for the length of the two parameters
    let aLength = a.length;
    let bLength = b.length;

    // check if length of a is greater than length of b
    if (aLength > bLength) {
        return b+a+b
    }

    // check if length of b is greater than length of a
    if (bLength > aLength) {
        return a+b+a
    }
}


/**
 * 6. Find Multiples of a Number
 * https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
 */
function findMultiples(integer, limit) {
    //your code here
    if (integer > limit) {
        return false;
    }

    // set an empty array where values are going to be pushed
    let data = [];
    let a = integer

    // create a conditon thst add multiple of interger so far as it is lesser or equals to limit
    while (a <= limit) {
        data.push(a);
        a += integer
    }

    // return new data after the loop
    return data;
}



console.log(findMultiples(5, 25))