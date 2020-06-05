/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start

const t = (m) => {
  const len = m.length;
  const index = len - 1;
  for (let i = 0; i <= index - 1; i++) {
    for (let j = 0; j <= index - i - 1; j++) {
      const c = m[index - j][index - i];
      m[index - j][index - i] = m[i][j];
      m[i][j] = c;
    }
  }
  return m;
};

const rt = (m) => {
  const len = m.length;
  const index = len - 1;
  for (let i = 0; i <= index; i++) {
    for (let j = i; j <= index; j++) {
      const c = m[j][i];
      m[j][i] = m[i][j];
      m[i][j] = c;
    }
  }
  return m;
};

const trans = (m) => {
  const len = m.length;
  const index = len - 1;
  for (let i = 0; i <= Math.floor(len / 2) - 1; i++) {
    for (let j = 0; j <= index; j++) {
      const c = m[index - i][j];
      m[index - i][j] = m[i][j];
      m[i][j] = c;
    }
  }
  return m;
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (matrix[0].length === 1) {
    return matrix;
  }
  return t(trans(rt(t(matrix))));
};
// @lc code=end

// var m = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
var m = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// var m = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
// [
//   [4, 24, 13, 32, 29, 2],
//   [33, 1, 20, 9, 27, 12],
//   [1, 14, 2, 27, 33, 20],
//   [6, 22, 32, 32, 28, 26],
//   [7, 21, 7, 25, 13, 21],
//   [34, 32, 26, 14, 16, 28],
// ];

// const out = [
//   [4, 33, 13, 32, 12, 2],
//   [24, 1, 14, 33, 27, 29],
//   [1, 20, 32, 32, 9, 20],
//   [6, 7, 27, 2, 25, 26],
//   [32, 21, 22, 28, 13, 16],
//   [34, 7, 26, 14, 21, 28],
// ];
// var  m = [[1]]
// var m = [
//   [2, 29, 20, 26, 16, 28],
//   [12, 27, 9, 25, 13, 21],
//   [32, 33, 32, 2, 28, 14],
//   [13, 14, 32, 27, 22, 26],
//   [33, 1, 20, 7, 21, 7],
//   [4, 24, 1, 6, 32, 34],
// ];

// console.log(rotate(m));
