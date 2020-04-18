/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
function maxSubArray(nums, n) {
  if (n > nums.length) {
    return null;
  }
  let sum = 0;
  let i = 0;
  for(i = 0; i < n; i++) {
    sum += nums[i];
  }
  i = 0;
  let j = n - 1;
  let maxSum = sum;
  j = n;
  while(j < nums.length) {
    sum -= nums[i];
    sum += nums[j];
    if (sum > maxSum) {
      maxSum = sum;
    }

    i++;
    j++;
  }
  return maxSum;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayMe = function(nums, n) {
    let count = nums.length;
    let maxSum = null;
    for(let i = 0; i < count; i++) {
      let sum = nums[i];
      for(let j = 1; j <= n - 1; j++) {
        if ((i+j) >= nums.length){
          break;
        }
        let value = nums[i+j];
        // console.log(` i=${i};j=${j};sumPrev=${sum};sum=${sum + value};add:${value}`);
        sum += value;
      }

      if (sum === null || sum > maxSum) {
        maxSum = sum;
      }

      console.log({
        i: i,
        sum: sum,
        maxSum: maxSum
      });
    }
    return maxSum;
};

module.exports = maxSubArray;