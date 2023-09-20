// Minimum
/* The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can build something like that now.

Write a function min that takes two arguments and returns their minimum. */

function min(a,b) {
	if (a < b) {
		return a
	} else if (a > b) {
		return b;
	} else {
		return a;
	}
}

console.log(min(4, 5));    // -> 4
console.log(min(125, 8));   // -> 8
console.log(min(7, 7));     // -> 7


function min(a, b) {
	return a < b ? a:b;
}

console.log(min(0, 10));    // → 0
console.log(min(0, -10));   // → -10

// Recursion
/* We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see 
whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single 
parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(num) {
    if (num < 0) {
        num = -num;
    }

    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
}
  
console.log(isEven(50));   // -> true
console.log(isEven(75));   // -> false
console.log(isEven(-1));   // -> false
console.log(isEven(-4));   // -> true 



/*Write a function countBs that takes a string as its only 
argument and returns a number that indicates how many uppercase “B” 
characters there are in the string.*/

function countBs(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count++;
        }
    }

    return count;
}
  

/* Next, write a function called countChar that behaves like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.*/

function countChar(string, str) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === str) {
            count++
        }
    }

    return count
}

console.log(countBs("BBCB"));
// → 3
console.log(countChar("kakkerlak", "k"));
// → 4