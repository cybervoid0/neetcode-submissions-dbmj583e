class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new Set()
        for (let num of nums) {
            if (freq.has(num)) return true
            freq.add(num)
        }
        return false
    }
}
