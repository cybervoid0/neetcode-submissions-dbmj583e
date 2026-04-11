class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase()
        const reversed = Array.from(normalized).toReversed().join('')
        console.log(normalized,reversed)
        return normalized === reversed
    }
}
