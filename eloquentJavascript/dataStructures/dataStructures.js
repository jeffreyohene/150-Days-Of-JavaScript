/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers 
from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example 
program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value 
used when building the array. If no step is given, the elements go up by increments of one, corresponding 
to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 

Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(num1, num2) {
    let answer = [];
    for (let i = num1; i <= num2; i++) {
        answer.push(i);
    }

    return answer;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }

    return total;
}

console.log(sum(range(1, 10)));
// → 55

function rangeN(a, b, s = 1) {
    let arr = [];

    if (s === 0) {
        throw new Error("Invalid step value."); // Added this piece of code to prevent code running an infinite loop
    }

    if (s > 0) {
        for (let i = a; i <=b; i+=s) {
            arr.push(i);
        }
    } else {
        for (let i = a; i >= b; i +=s) {
            arr.push(i);
        }
    }

    return arr;

}

console.log(rangeN(5, 2, -1));
// → [5, 4, 3, 2]


/* 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 

For this exercise, write two functions, reverseArray and reverseArrayInPlace. 

- The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
- The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 

Neither may use the standard reverse method.
*/

function reverseArray(array) {

    newArr = [];

    for (let i = array.length -1; i >= 0; i--) {
        newArr.push(array[i])
    }

    return newArr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(arrValue) {
    revArr = [];
    
    for (let i = 0; i < Math.floor(arrValue.length/2); i++) {
        revArr.push(arrValue[i]);
    }

    return revArr;
}