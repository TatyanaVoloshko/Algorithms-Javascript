
// 3. Search and Replace
// Perform a search and replace the sentence using the arguments provided and return the new sentence.

// The first argument is the sentence to perform the search and replace on.
// The second argument is the word that you will be replacing (before).
// The third argument is what you will be replacing the second argument with (after).


// define a function with parameter str, befor, after
// convert string to arr
// for loop to iterate through the array
// condition arr[i] === befor
// if true arr[i] = after
// return str



// function myReplace(str, before, after) {
//     let arr = str.trim().toLowerCase().split(' ')
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === before.toLowerCase()) {
//             arr[i] = after
//         }
//     }
  
//   return str = (arr.join(" "));
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))

//===========================================

// function sumPrimes(num) {
//   let sum = 0;
//   let arr = [];

//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
    
//       }
//     }

//     if (isPrime) {
//       arr.push(i);
//     }
//   }
    
//     for (i of arr) {
//         sum+=i
//     }
//   return sum;
// }

// console.log(sumPrimes(977));
// ========================================================


// Sum All Odd Fibonacci

let newArr = [];
let sum = 0;

function fib(n) {
  let a = 0;
  let b = 1;

  while (b <= n) {
    if (b % 2 !== 0) {
      newArr.push(b);
      sum += b;
    }

    let c = a + b;
    a = b;
    b = c;
  }
}

fib(10);

console.log(newArr);
console.log(sum);