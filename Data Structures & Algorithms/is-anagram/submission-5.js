class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return String(Array.from(s).toSorted()) === String(Array.from(t).toSorted())
    }

    #freq(str) {
        return Array.from(str).reduce((acc, el) => ({ ...acc, [el]: (acc[el] ?? 0) + 1 }), {})
    } 
}
