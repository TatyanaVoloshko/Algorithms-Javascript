//- create function Factorialize with parametr n
//- create variable a=1
//- sort number from 1 to n
//- create variable c = a*i
//- equate a to c
//- return a outside the loop
//- call function Factorialize


let Factorialize = (n) => {
    let a = 1;

    for (let i = 1; i <= n; i += 1) {
        let c = a * i
        a = c
    }

    return a
}

console.log(Factorialize(20));

