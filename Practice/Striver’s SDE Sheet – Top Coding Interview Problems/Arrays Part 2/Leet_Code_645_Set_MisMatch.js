/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let s = 0;
    let s2 = 0;
    for(let i=0; i<nums.length; i++) {
        s += nums[i];
        s2 += nums[i] * nums[i]
    }
    let sn = (n * (n+1))/2;
    let s2n = (n*(n+1)*(2*n+1))/6;
    /**
    *  dup-miss = s-sn
    *  dup2-miss2 = s2-s2n
    *  (dup-miss)(dup+miss) = s2-s2n
    *  dup+miss = (s2-s2n)/(dup-miss)
    *  dup+miss = (s2-s2n)/(s-sn)
    */
    
    const dup = ((s2-s2n)/(s-sn) + (s-sn))/2;
    const miss = dup - (s - sn);

    return [dup, miss]
};


/**
 * Test Case
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 */