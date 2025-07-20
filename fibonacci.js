
let number = prompt("Enter a Number to get a Fibonaccis : ");
let a = 0, b = 1;

for (let i = 2; i <= number; i++) {
    let next = a + b;
    a = b;
    b = next;
}

console.log("Fibonacci of", number, "is", b);
