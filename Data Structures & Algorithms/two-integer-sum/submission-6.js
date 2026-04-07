class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for (let i = 0; i < nums.length; i += 1) {
            let num = nums.at(i)
            let pair = target - num
            if (pair in seen) {
                return [seen[pair], i]
            }
            seen[num] = i
        }
    }
}
