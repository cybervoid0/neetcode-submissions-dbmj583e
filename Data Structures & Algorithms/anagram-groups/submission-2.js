class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const dict = new Map()
        for (const word of strs) {
            const sorted = Array.from(word).toSorted().join('')
            dict.set(sorted, [...dict.get(sorted) ?? [], word])
        }
        return Array.from(dict.values())
    }
}
