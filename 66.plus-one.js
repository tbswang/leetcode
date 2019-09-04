/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const { length } = digits;
  if (length < 1) return digits;

  // solution 1
  // js中的BigInt超出16位就会溢出
  // function arr2number(arr) {
  //   return arr.reduce((pre, cur, index) => {
  //     const weight = length - index - 1;
  //     // console.log(weight);
  //     return pre + (BigInt(cur * Math.pow(10, weight)));
  //   }, 0n);
  // }

  /** solution 2
   * 直接使用数组
   */
  let carry = digits[length - 1] >= 9;
  for (let i = length - 1; i >= 0; i--) {
    if (carry && digits[i] === 9) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] += 1;
      break;
    }
    
    if(i === 0) {
      digits.unshift(1);
    }
  }
  // console.log(digits);

  return digits;
};

// plusOne([7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6])
// plusOne([9, 9, 9])
