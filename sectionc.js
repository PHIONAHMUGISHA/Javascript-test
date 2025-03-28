//SECTION C
//QN 1

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));


//qn 2 implent a function to find the sum of all even numbers in an array 


function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbers)); Output: 3

//qn 3
 //create a function that takes two numbers if the numbers are the same return their products if they are different return thier sum

function processNumbers(a, b) {
    return a === b ? a * b : a + b;
}

console.log(processNumbers(4, 4)); // : 16 (4 * 4)
console.log(processNumbers(3, 5)); // : 8 (3 + 5)

//4

function isPalindrome(word) {
    // Convert the word to lowercase and remove non-alphanumeric characters
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the word is the same when reversed
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

// 
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // output result: true