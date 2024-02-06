let Factorialize = (n) => {
    let a = 1;

    for (let i = 1; i <= n; i += 1) {
        let c = a * i
        a = c
    }

    return a
}

console.log(Factorialize(20)); 
