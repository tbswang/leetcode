/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 * total: 50min
 * date: 2019-09-03
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n < 1 || n > 30 ) return
  if (n === 1) return "1"
  let out = Array(n+1).fill('');
  out[1] = '1';
  /**
   * 返回第一个不同数字的字符下标
   * @param {string} str 
   * @param {number}
   */
  function lastSameCharIndex(str, start) {
    if ( str.length === 1) {
      return 0;
    }
    for (var i = start + 1; i < str.length; i++) {
      if (str[i] !== str[i -1]) {
         return i-1;
      }
    }
    return str.length - 1;
  }
  /**
   * 根据前一个， 返回后一个
   * @param {string} str 值拷贝
   * @param {string}
   */
  function calculate(str) {
    let pre = cur = 0;
    let out = '';
    while (pre < str.length) {
      let cur = lastSameCharIndex(str, pre);
      out = '' + out + (cur - pre + 1) + str[cur];
      pre = cur + 1;
    }
    return out;
  }
  for(let i = 2; i <= n; i++) {
    out[i] = calculate(out[i-1]);
    console.log(out[i]);
  }
  return out[n];
};

