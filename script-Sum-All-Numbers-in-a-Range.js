// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.



function sumAll(arr) {
    let sum = 0

    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
        return sum;

    } else if (arr[0] > arr[1]) {
        for (let i = arr[0]; i >= arr[1]; i--) {
             sum += i;
        }
        return sum;

    } 
}
console.log(sumAll([1, 5]));
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));


