// Write a function called add7 that takes one number and returns that number + 7.

function add7 (number) {
    return number + 7;
}

let erste = add7(10);
let zweite = add7(1785)

console.log(erste)
console.log(zweite)

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(n1, n2) {
    return n1 * n2
}

let p1 = multiply(8,5)
let p2 = multiply(78544, 9788)

console.log(p1)
console.log(p2)


// Write a function called capitalize that takes a string and returns that string with only 
//the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(str) {
    const ersteBuch = str.charAt(0).toUpperCase();
    const reste = str.slice(1).toLowerCase();

    return `${ersteBuch}${reste}`;

}

t1 = capitalize("elefant")
t2 = capitalize("moBy dIcK")

console.log(t1)
console.log(t2)


// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

r = lastLetter("xylophone")
console.log(r)