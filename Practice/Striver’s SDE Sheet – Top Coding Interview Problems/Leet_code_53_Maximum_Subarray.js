/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {//Bruteforce
//     let max = -Infinity;
//     for(let i=0; i<nums.length; i++){
//         let sum = 0;
//         for(let j=i; j<nums.length; j++) {
//             sum += nums[j]
//             if(sum > max){
//                 max = sum
//             }
//         }
//     }
//     return max
// };

var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let maxSoFar = nums[0];
    for(let i=1; i<nums.length; i++){
        if(maxSoFar<0){
            maxSoFar = 0;
        }
        maxSoFar += nums[i];
        if(maxSoFar > maxSum){
            maxSum = maxSoFar;
        }
    }
    return maxSum
};

/**
 * Test case
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 */