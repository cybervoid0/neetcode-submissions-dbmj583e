class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const dict = new Map()
        for (const word of strs) {
            const sorted = String(Array.from(word.toLowerCase()).toSorted())
            dict.set(sorted, [...dict.get(sorted) ?? [], word])
        }
        return Array.from(dict.values())
    }
}
