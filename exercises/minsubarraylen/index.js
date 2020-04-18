function minSubArrayLenMe(nums, n) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let len = nums.length;
  let subLen = Infinity;
  while(i < len){
    if (sum < n && j < len){
      sum += nums[j];
      j++;
    } else if (sum >= n) {
      subLen = Math.min(subLen, j - i);
      sum -= nums[i];
      i++;
    } else {
      break;
    }
  }
  return (subLen===Infinity) ? 0 : subLen;
}

module.exports = minSubArrayLenMe;