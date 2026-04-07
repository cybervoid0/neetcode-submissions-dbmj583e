class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const frequency = nums
        .reduce((acc, val) => ({ ...acc, [val]: (acc[val] ?? 0) + 1 }), {})
        return Object.entries(frequency).some(([, val]) => val > 1)
    
    }
}
