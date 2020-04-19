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

function power(num, pow){
  if (pow === 0) {
      return 1;
  }
  return num * power(num, pow - 1);
}

function factorial(n){
  if (n === 0) {
      return 1;
  }
  return n * factorial(n - 1);
}


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
  if (arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.splice(1));
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(n){
  if (n === 0) {
      return 0;
  }
  return n + recursiveRange(n -1);
}

function isPalindrome(str){
  let n = str.length;
  if (n <= 1){
      return true;
  }

  let firstChar = str[0];
  let lastChar = str[n - 1];
  
  if (firstChar !== lastChar){
      return false;
  }

  let s = str.substr(1, str.length - 2);

  return isPalindrome(s);
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb){
  let n = arr.length;
  if(n === 0) {
      return false;
  }
  let el = arr.shift();
  if (cb(el)) {
      return true;
  }
  return someRecursive(arr, cb);
}

function flatten(){
  // add whatever parameters you deem necessary - good luck!
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  for(let i = 0; i < arr.length; i++) {
      let str = arr[i];
      str = str[0].toUpperCase() + str.slice(1);
      arr[i] = str;
  }
  return arr;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(0);
  let node = result;

  let node1 = l1;
  let node2 = l2;
  let carry = 0;
  while(node1 !== null || node2 !== null) {
      let sum = carry;
      if (node1 !== null){
          sum += node1.val;
          node1 = node1.next;
      }
      if (node2 !== null){
          sum += node2.val;
          node2 = node2.next;
      }
      if (sum > 9) {
          carry = 1;
          sum = sum % 10;
      } else {
          carry = 0;
      }
      node.next = new ListNode(sum);
      node = node.next;
  }
  if (carry > 0) {
      node.next = new ListNode(carry);
  }
  return result.next;
}


module.exports = {
  minSubArrayLen: minSubArrayLenMe,
  addTwoNumbers: addTwoNumbers
}