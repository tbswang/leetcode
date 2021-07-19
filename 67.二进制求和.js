/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (!a || !b) return '';

  let idx1 = a.length - 1;
  let idx2 = b.length - 1;
  let res = [];
  let flag;
  while (idx1 >= 0 && idx2 >= 0) {
    const { value, flag: tmpFlag } = addBit(a[idx1], b[idx2], flag);
    flag = tmpFlag;
    res.unshift(value);
    idx1--;
    idx2--;
  }
  while (idx1 >= 0) {
    const { value, flag: tmpFlag } = addBit(a[idx1], '0', flag);
    flag = tmpFlag;
    res.unshift(value);
    idx1--;
  }
  while (idx2 >= 0) {
    const { value, flag: tmpFlag } = addBit('0', b[idx2], flag);
    flag = tmpFlag;
    res.unshift(value);
    idx2--;
  }
  if (flag) {
    res.unshift('1');
  }
  return res.join('');
};

/**
 *
 * @param {*} bit1
 * @param {*} bit2
 */
var addBit = function (bit1, bit2, flag) {
  if (bit1 === '1' && bit2 === '1') {
    return {
      value: flag ? '1' : '0',
      flag: true,
    };
  } else if (bit1 === '0' && bit2 === '0') {
    return {
      value: flag ? '1' : '0',
      flag: false,
    };
  } else {
    if (flag) {
      return {
        value: '0',
        flag: true,
      };
    } else {
      return {
        value: '1',
        flag: false,
      };
    }
  }
};
// @lc code=end

console.log(addBinary('11', '1'));
