class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqS = this.#freq(s)
        const freqT = this.#freq(t)
        const arrS = Object.entries(freqS)
        const arrT = Object.entries(freqT)
        return arrS.length == arrT.length && arrS.every(([key, val]) => freqT[key] == val)
    }

    #freq(str) {
        return Array.from(str).reduce((acc, el) => ({ ...acc, [el]: (acc[el] ?? 0) + 1 }), {})
    } 
}
