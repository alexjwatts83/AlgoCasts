// var singleNumber = function(nums) {
//   if (nums.length === 1) {
//     return nums[nums.length -1];
//   }
//   let leCache= {};
//   console.log({leCache:leCache});
//   for(let i = nums.length -1; i >= 0; i--) {
//       let num = nums[i];
//       let key = `${num}`;
//       leCache[key] = (leCache[key] === undefined ? 0 : leCache[key]) + 1;
//       console.log({leCache:leCache, i: i, num: num, key: key});
//   }
//   console.log({leCache:leCache});
//   for(var key in leCache) {
//     console.log({key:key});
//     if(leCache[key] === 1) {
//       return parseInt(key);
//     }
//   }
//   return null;
// };

// 36ms
var singleNumber = function(nums) {
  let r = 0;
  for(let i = 0; i < nums.length; i += 1) {
      r ^= nums[i];
  }
  return r;
};

// 44ms
// var singleNumber = function(nums) {
//   let map = new Map()
//   for(let i = 0 ; i < nums.length ; i++){
//       if(map.has(nums[i])) map.delete(nums[i])
//       else map.set(nums[i], nums[i])
//   }
//   return map.keys().next().value
// }

// 56ms
// var singleNumber = function(nums) {
//   for(var i = 1; i < nums.length;i++){
//       nums[0] = nums[0] ^ nums[i];
//   }
//   return nums[0];
// };

module.exports  = singleNumber;