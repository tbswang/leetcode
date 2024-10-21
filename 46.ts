/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
// function permute(nums: number[]): number[][] {
//   const result: number[][] = []
//   // 路径
//   // const track 
//   // 选择列表
//   // const list
//   function backtrack(track: number[], list: number[]) {
//     // 终结条件
//     if (list.length === 0) {
//       result.push([...track])
//       return
//     }
//     // 选择列表
//     for (let i = 0; i < list.length; i++) {
//       if (track.indexOf(list[i]) > -1) {
//         /** 如果已经选择过 */
//         continue
//       }
//       const ele = list[i]
//       track.push(ele)
//       list.splice(i, 1)
//       backtrack(track, list)
//       track.pop()
//       list.splice(i, 0, ele)
//     }
//   }

//   backtrack([], nums)
//   return result
// };
//  记录选择列表
function permute(nums: number[]): number[][] {
  const res = []
  function backtrack(track: number[], options: number[]){
    if(options.length === 0){
      res.push(track)
    }
    options.map(o => {
      backtrack(track.concat(o), options.filter(i => i!== o))
    })
  }

  backtrack([], nums)
  return res
}

// @lc code=end


// const nums = [1, 2, 3]
const nums = [0]
console.log(permute(nums))