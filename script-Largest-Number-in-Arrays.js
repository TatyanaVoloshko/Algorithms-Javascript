// Monday: Largest Number in Arrays

// Return an array consisting of the largest number from each provided sub - array.
// For simplicity, the provided array will contain exactly 4 sub - arrays.

// Remember, you can iterate through an array with a simple for loop,
// and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let newArr = [];

  for (i of arr) {
    let largestNum = i[0];

    for (num of i) {
      if (num > largestNum) {
        largestNum = num;
      }
    }

    newArr.push(largestNum);
  }

  return newArr;
}

console.log(
  largestOfFour([
    [4, 5, 3, 1],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// function takes an array as parametr
// define empty array
// for loop to iterate through the main array
// variable to hold the max number
// for loop to iterate throught the subarrais
// condition to check if max less than the current subarray element
// if yes max = current element
// add the bigest number to the empty array
// return the new array
