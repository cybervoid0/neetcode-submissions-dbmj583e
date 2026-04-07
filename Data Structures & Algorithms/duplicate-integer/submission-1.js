class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const frequencies = {}
        for (const num of nums) {
            const newFreq = (frequencies[num] ?? 0) + 1
            if (newFreq > 1) return true
            frequencies[num] = newFreq
        }
        return false
    }
}
