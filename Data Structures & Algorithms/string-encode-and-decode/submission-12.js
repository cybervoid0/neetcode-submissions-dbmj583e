class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    	let rest = str;
        const result = [];
        while (rest) {
            const ind = rest.indexOf("#");
            const num = rest.slice(0, ind);
            const remaining = rest.slice(ind + 1);
            const length = Number(num);
            result.push(remaining.slice(0, length));
            rest = remaining.slice(length);
        }
        return result;
    }
}
