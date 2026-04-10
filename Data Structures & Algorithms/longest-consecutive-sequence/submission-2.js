class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // важно составить сет всех чисел массива чтобы быстро определять есть ли элемент в массиве
        const inNums = new Set(nums);
        let maxSequence = 0;
        // проходимся по уникальным значениям (не по всем числам массива)
        for (const num of inNums.values()) {
            // если предыдущего нет, значит это НЕ начало последовательности, и можно продолжать
            if (inNums.has(num - 1)) continue;
            // нашли потенциальное начало цепочки
            let curr = num;
            // наращиваем длину данной цепочки
            let seqLen = 1;
            while (inNums.has(curr + 1)) {
                curr += 1;
                seqLen += 1;
            }
            // обновляем размер максимальной цепочки если текущая стала больше
            maxSequence = Math.max(seqLen, maxSequence);
        }
        return maxSequence;
    }
}
