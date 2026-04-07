class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map()
        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1)
        }
        return freq.entries().reduce((acc, [num, count]) => {
            acc[count] = [...(acc[count] ?? []), num]
            return acc
        }, []).flat().slice(-k)
    }
}
