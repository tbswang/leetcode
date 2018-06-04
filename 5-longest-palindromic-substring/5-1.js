/**
 * 
 * @param {string} s
 * @return {string}
 */
/**time: 2018年05月27日16:58:25
 * 思路 : 从算法笔记上的 例题c++改成js
 * 动态规划的方法, o(n^2)
 * 
 * 主要是三个步骤: 
 * 动态规划的问题:1.找出边界条件和状态转移方程
 */
var longestPalindrome = function (s) {
    var dp = [];
    var longPal = s[0];//leetcode这个题的约定是如果整个字符都不是回文, 就把第一个返回
    var ans = 1;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        dp[i] = [];
        dp[i][i] = 1;
        if (i < len - 1) {
            if (s[i] === s[i + 1]) {
                dp[i][i + 1] = 1;
                longPal = '';
                longPal = s.substring(i, i + 2);
                ans = 2;
            }
        }
    }
    for (var L = 3; L <= len; L++) {
        for (var i = 0; i + L - 1 < len; i++) {
            var j = i + L - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
                dp[i][j] = 1;
                longPal = '';
                longPal = s.substring(i, j + 2);
                ans = L;
            }
        }
    }
    return longPal;

};
var str = longestPalindrome("abcda");
console.log(str);