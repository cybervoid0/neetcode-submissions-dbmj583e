class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, count] of freq) {
            buckets[count].push(num);
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            result.push(...buckets[i]);
        }
        return result;
        }
}
