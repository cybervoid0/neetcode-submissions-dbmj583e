class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0
        let R = heights.length - 1
        let maxSquare = 0
        while (L < R) {
            const lH = heights[L]
            const rH = heights[R]
            const square = (R - L) * (Math.min(lH, rH))
            maxSquare = Math.max(square, maxSquare)
            if (lH <= rH) L += 1
            else R -= 1
        }
        return maxSquare
    }
}
