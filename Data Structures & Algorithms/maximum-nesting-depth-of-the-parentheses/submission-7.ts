class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDepth(s: string): number {
        const dic = new Set(['(', ')'])
        const parens = Array.from(s).filter(ch => dic.has(ch))
        if (parens.length === 0) return 0
        return Math.max(...parens
            .map(ch => ch === '(' ? 1 : -1)
            .reduce((acc, el) => [...acc, el + (acc.at(-1) ?? 0)], []))
    }
}
