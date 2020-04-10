var singleNumber = function(nums) {
  let leCache= {};
  for(let i = nums.length; i >= 0; i--) {
      let num = nums[i];
      leCache[num] = (leCache[num] === undefined ? 0 : leCache[num]) + 1;
  }
  for(var key in leCache) {
    if(leCache[key] === 1) {
      return parseInt(key);
    }
  }
  return null;
};

module.exports  = singleNumber;