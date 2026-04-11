class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase()
        const reversed = [...normalized].reverse().join('')
        return normalized === reversed
    }
}
