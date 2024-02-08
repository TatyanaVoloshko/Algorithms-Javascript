// 1. Addition

// let sum = 0

// for (let i = 200; i <= 2700; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum +=i
//     }
// }

// console.log(sum)

// =========================================


// 2. Shift the Values
// let reverseArr = []

// function reverseX(arr) {
//     reverseArr = arr.reverse()
//     console.log(reverseArr)
// }

// reverseX([2, 1, 6, 4, -7]);

// =========================================


// 3. FizzBuzz

// let newArr = []

// function newFunc () {
//     for (let i = 1; i <= 135; i += 1) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//         newI = "FizzBuzz"
//     } else if (i % 3 === 0) {
//         newI = "Fizz";

//     } else if (i % 5 === 0) {
//         newI = "Buzz";
//     } else {
//         newI = i
//     }

//    newArr.push(newI)
// }
//     return newArr
// }

// console.log(newFunc());

// ===========================================

// 4. Fibonacci
// let newArr = []

// function fib(n) {
//     let a = 0;
//     let b = 1;

//     for (let i = 2; i <= n; i += 1) {
//         let c = a + b
//         a = b
//         b = c

//         newArr.push(b)
    
        
//     }
//     return b
// }

// console.log(fib(10))
// console.log(newArr)


// 5.Remove the Negative


// function positNum(arr) {
//     let newArr = []

//     for (num of arr) {
//         if (num > 0) {
//             newArr.push(num);
//         }
//     }
//     return newArr;
// }

// console.log(positNum([-1, 2, -4, 1]));


// 6. Communist Censorship

// let X = [["Man", "I", "Love", "The", "Matrix", "Program"]];

// function changeWord(arr, word) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === word) {
//         arr[i][j] = "*".repeat(word.length);
//       }
//     }
//   }
//   return arr;
// }
// console.log(changeWord(X, "Matrix"));

