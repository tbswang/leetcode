/*
 * @lc app=leetcode id=343 lang=cpp
 *
 * [343] Integer Break
 */

/*
 * 
 not work: n=44, p=12或者16
 我的思路:
	n - sum
	p - p个数
	max - 最大积
	原理: 均分的时候积最大
	for i in p
		x = int(n/i)
		delta = n - (x*(i-1))
		out = pow(x,i-1) * delta
		if(out < max)
			return out

    网上的思路: 分成2和3的时候最大
    https://leetcode.com/problems/integer-break/discuss/80689/A-simple-explanation-of-the-math-part-and-a-O(n)-solution
*/
#include <complex>
#include <cmath>
#include <iostream>
// @lc code=start
class Solution
{
public:
    int integerBreak(int n)
    // {
    //     double p = 2.0;
    //     int max = 0;
    //     while (p <= n)
    //     {
    //         int x = round(n / p);
    //         int delta = n - x * (p - 1);
    //         double out = pow(x, p - 1) * delta;
    //         if (out > max)
    //             max = out;
    //         std::cout << p << "\t" << out << std::endl;
    //         p++;
    //     }
    //     return max;
    // }
    {
        if (n == 2)
            return 1;
        if (n == 3)
            return 2;
        int product = 1;
        while (n > 4)
        {
            product *= 3;
            n -= 3;
        }
        product *= n;
        return product;
    }
};
// @lc code=end
int main()
{
    Solution s;
    // std::cout << s.integerBreak(2) << std::endl;
    // std::cout << s.integerBreak(10) << std::endl;
    std::cout << s.integerBreak(44) << std::endl;
}