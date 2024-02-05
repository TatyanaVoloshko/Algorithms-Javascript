//Monday: JS Basic

// 1. Print 1 - 135

// for (let i = 0; i <= 135; i += 1) {
//     console.log(i);
// }
// ====================================

// 2. Print Odd Numbers 1 - 135

// for (let i = 0; i <= 135; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// ====================================


// 3. Sum of Printed Numbers

// let sum = 0

// for (let i = 0; i <= 135; i += 1) {
//     sum += i
//     console.log(`Number is: ${i}; Sum: ${sum}`);
// }
// ======================================


// 4. Print the elements of an array

// const X = [1, 4, 2, 12]

// for (const arr of X) {
// console.log(arr)
// }
// =========================================

// 5. Find Max

// const X = [-1, -3, -2, 0];
// let maxNum = X[0]

// for (num of X) {
    
//     if (num>maxNum) {
//         maxNum = num
//     }
// }

// console.log(maxNum);
// ==========================================

// 6. Get Average

// const X = [2, 1, 3];
// let sum = 0
// let aver = 0

// for (const num of X) {
//     sum += num
//     aver = sum / X.length
// }

// console.log(aver)

// ============================================
 

// 7. Eliminate the Negatives

// const X = [-2, -1, 4, -3, 5, -15];

// for (let i = 0; i < X.length; i += 1) {

//     if (X[i] < 0) {

//         X.splice(i, 1, 0)
//     }
    
// }

// console.log(X)

// ============================================


// 8. Number to String

// const X = [1, -4, 0, -1];

// for (let i = 0; i < X.length; i += 1) {
    
//     if (X[i] < 0) {

//         X[i] = 'sting'

//     }
// }

// console.log(X)

