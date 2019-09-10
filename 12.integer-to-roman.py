#
# @lc app=leetcode id=12 lang=python3
#
# [12] Integer to Roman
#
class Solution:
    def __init__(self):
        self.mapNumToRoman = {
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
        self.allNumbers = self.mapNumToRoman.keys()
        self.low = 0
    def firstLowerNum(self, allNumbers, num: int) -> int:
        low = 0
        for e in allNumbers:
            if e <= num:
                low = e
        return low
    def intToRoman(self, num: int) -> str:
        out = ''
        while num > 0:
            low = self.firstLowerNum(self.allNumbers, num)
            out += self.mapNumToRoman[low]
            num = num - low
        return out

# s = Solution()
# print(s.intToRoman(3))