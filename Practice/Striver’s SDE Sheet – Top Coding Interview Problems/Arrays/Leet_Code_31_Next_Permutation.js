/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const arrayLength = nums.length;
    let breakpointIndex = -1
    for(let i=arrayLength-1; i>0; i--) {
        if(nums[i] > nums[i-1]){
            breakpointIndex = i-1;
            break;
        }
    }
    if(breakpointIndex !== -1) {
        for(let i=arrayLength-1; i>breakpointIndex; i--){
        if(nums[i] > nums[breakpointIndex]){
            [nums[i], nums[breakpointIndex]] = [nums[breakpointIndex], nums[i]]
            break;
        }
    }
    }

    let [start, end] = [breakpointIndex + 1, arrayLength-1];

    while(end>=start){
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--
    }
};

/**
 * Test Case
 * Input: nums = [1,2,3]
 * Output: [1,3,2]
 */