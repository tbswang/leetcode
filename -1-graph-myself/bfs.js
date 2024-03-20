/**
 * 题目：

在一个二维网格中，'1' 代表陆地，'0' 代表海洋。找到最大的岛屿面积。

示例：

输入：
[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

输出：3
解释：

最大的岛屿由 3 个 '1' 组成。

思路：

使用 BFS 算法从每个 '1' 开始遍历，将所有相邻的 '1' 都标记为已访问。遍历完所有 '1' 后，统计最大的岛屿面积即可。
 */

function maxAreaOfIsland(grid) {
  const n = grid[0].length // num of column
  const m = grid.length // num of row
  // 构造一个同等空间的数组
  const visited = new Array(m).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

    }
  }

}

/**
 * test
 * 
 * const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

const maxArea = maxAreaOfIsland(grid);
console.log(maxArea); // 3
 */
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
maxAreaOfIsland(grid)