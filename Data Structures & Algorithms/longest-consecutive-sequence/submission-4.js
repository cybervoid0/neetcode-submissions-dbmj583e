class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const inNums = new Set(nums);
        let maxSequence = 1;
        for (const num of inNums.values()) {
            if (inNums.has(num - 1)) continue;
            else {
                let curr = num;
                let seqLen = 1;
                while (inNums.has(curr + 1)) {
                    curr += 1;
                    seqLen += 1;
                    maxSequence = Math.max(seqLen, maxSequence);
                }
            }
        }
        return maxSequence;
    }
}
