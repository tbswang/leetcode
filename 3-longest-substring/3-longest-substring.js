/**
 * @param {string} s
 * @return {number}
 */
//思路: o(n^3)会报超时.
//从子串结尾的上一个开始遍历
var lengthOfLongestSubstring = function (s) {
    var sub = [];
    var len = 0;
    var pos = 0;
    var fromPos = 0
    var k = 0;
    for (var i = 0; i < s.length; i = k) {
        // console.log(i);
        for (var j = i; j < s.length; j++) {
            var pos = sub.indexOf(s.charAt(j));
            if (pos < 0) {
                var thisLen = sub.push(s.charAt(j));
                len = thisLen > len ? thisLen : len;
                // console.log(sub);
            } else {
                for (k = i; k <= j; k++) {
                    if (s.charAt(k) === s.charAt(j)) {
                        ++k;
                        break;
                    }
                }
                sub = [];
                break;
            }
            // console.log(len);
        }
    }
    return len;
}