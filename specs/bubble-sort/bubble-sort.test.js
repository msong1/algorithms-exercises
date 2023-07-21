/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end

  To run the tests, change the `test.skip(…)` below to `test(…)`

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // input: array of Numbers
  // output: array of Numbers
  // constraint: do not make another array
  // edge cases: empty array, stable sorting

  // check if any numbers are swapped
  let swapped;

  // re-iterate until no elements are swapped
  while (true) {
    swapped = false;
    // iterate over the array
    for (let i = 0; i < nums.length - 1; i++) {
      // compare two adjacent numbers
      // if the first number is bigger, swap
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        // mark swapped
        swapped = true;
      }
    }

    if (swapped === false) {
      break
    }
  }

  return nums
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
