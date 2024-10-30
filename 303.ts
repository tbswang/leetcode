/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
    sum = []
    constructor(nums: number[]) {
        let init = 0;
        // sum:0,0; sum:1,  num[0], sum:1, num{0 + 1}
        this.sum = new Array(nums.length + 1).fill(0)
        nums.map((n, idx) => {
            this.sum[idx + 1] = init + n
            init = this.sum[idx + 1]
        })
        console.log(this.sum)

    }

    sumRange(left: number, right: number): number {
        // sum[2] - sum[0] = [0,1,2] - 0
        // 2-5 = sum[5]- sum[2] = [0,1,2,3,4,] - [0,1,2,] = [ 3,4]
        // 
        return this.sum[right + 1] - this.sum[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end


let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return 1 ((-2) + 0 + 3)
console.log(numArray.sumRange(2, 5)); // return -1 (3 + (-5) + 2 + (-1)) 
console.log(numArray.sumRange(0, 5)); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))