/*
 * date: 2019-09-10 09:35:08
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 * 
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const mapNumToRoman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }
  let out = '';
  const allNumbers = Object.keys(mapNumToRoman).map(number => parseInt(number));
  let low = 0;
  while (num > 0) {
    low = firstLowerNum(allNumbers, num);
    out += mapNumToRoman[low];
    num = num - low;
  }
  return out;

  /**
   * 从arr中找出第一个小于等于num的数字
   * @param {Array<number>} arr 
   * @param {number} num 
   */
  function firstLowerNum(arr, num) {
    let low = 0;
    arr.forEach(e => {
      if (e <= num) {
        low = e;
      }
      return;
    })
    return low;
  }
};

// const out = intToRoman(58);
// console.log(out);
