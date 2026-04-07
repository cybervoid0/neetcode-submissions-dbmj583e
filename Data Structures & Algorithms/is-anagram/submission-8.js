class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return String(Array.from(s).toSorted()) === String(Array.from(t).toSorted())
    }
}
