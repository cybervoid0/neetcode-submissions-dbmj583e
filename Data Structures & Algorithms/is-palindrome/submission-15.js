class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
        const reversed = [...normalized].reverse().join('')
        return normalized === reversed
    }
}
