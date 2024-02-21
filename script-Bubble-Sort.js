// define function with parametr arr
// for loop arr start from last element
// for loop arr start from 1 to last element
// condition arr[j-1] > arr[j]
//  define new variable temp equal arr[j-1]
// if true arr[j-1] = arr[j], arr[j] = temp
// return arr

// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = 1; j <= i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([7, 5, 2, 4, 3, 9]));
// console.log(bubbleSort([9, 7, 5, 4, 3, 1]));
// console.log(bubbleSort([1, 2, 3, 4, 5, 6]));
