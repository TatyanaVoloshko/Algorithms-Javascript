// define function fib with param n
// define variable a = 0, b = 1
// for loop start from 2 to n
// define var c = a+b
// change a = b, b = c
// rturn b

function fib(n) {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i += 1) {
        let c = a + b
        a = b
        b = c
    }
    return b;
}

console.log(fib(43))
console.log(fib(101));
console.log(fib(227));
console.log(fib(491));
console.log(fib(881));
