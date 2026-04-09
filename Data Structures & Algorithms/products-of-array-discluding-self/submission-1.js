class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProducts = []
        const suffixProducts = []
        for (let i = 0; i < nums.length; i+=1) {
            const j = nums.length - 1 - i
            prefixProducts[i] = nums[i] * (prefixProducts[i-1] ?? 1)
            suffixProducts[j] = nums[j] * (suffixProducts[j+1] ?? 1)
        }
        const products = []
        for (let i = 0; i < nums.length; i+=1) {
            products[i] = (prefixProducts[i-1] ?? 1) * (suffixProducts[i+1] ?? 1)
        }    
        return products
    }
}
