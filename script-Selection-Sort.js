// function selectSort(arr) {
//     let minInd, temp = arr.length

//     for (let i = 0; i < arr.length; i++) {
        
//         minInd = i
    
        
//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[minInd] > arr[j]) {
//                 minInd = j
//             }
//         }
//         temp = arr[i]
//         console.log(temp)
//         arr[i] = arr[minInd]
//         console.log(arr[i])
//         arr[minInd] = temp
//         console.log(arr)
//     }
//     return arr
// }

// console.log(selectSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));