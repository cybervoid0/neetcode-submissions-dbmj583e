class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()
        for (let [i, num] of nums.entries()) {
            let pair = target - num
            if (seen.has(pair)) {
                return [seen.get(pair), i]
            }
            seen.set(num, i)
        }
    }
}
