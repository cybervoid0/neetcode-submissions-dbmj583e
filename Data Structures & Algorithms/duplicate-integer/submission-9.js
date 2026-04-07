class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums, seen = new Set(), i = 0) {
    if (i >= nums.length) return false
    if (seen.has(nums[i])) return true
    return this.hasDuplicate(nums, seen.add(nums[i]), i + 1)
}
}
