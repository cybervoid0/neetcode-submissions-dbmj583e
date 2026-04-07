class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let [i, num] of nums.entries()) {
            for (let j = i + 1; j < nums.length; j += 1) {
                if (num + nums[j] === target) return [i, j]
            }
        }
    }
}
