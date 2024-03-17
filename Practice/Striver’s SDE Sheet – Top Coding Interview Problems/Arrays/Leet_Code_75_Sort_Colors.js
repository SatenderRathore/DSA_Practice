/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {// Counting Sort
//     let zeroes = 0;
//     let ones = 0;
//     let twos = 0;
    
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i]===0){
//             zeroes++;
//         } else if(nums[i] === 1) {
//             ones++;
//         } else {
//             twos++;
//         }
//     }
//     for(let i=0; i<nums.length; i++) {
//         if(zeroes>0){
//             nums[i] = 0;
//             zeroes--;
//         } else if(ones > 0){
//             nums[i] = 1;
//             ones--;
//         } else {
//             nums[i] = 2
//         }
//     }
// };

var sortColors = function(nums) {
    let [start, end] = [0, nums.length-1]

    let i=0
    while(i<=end){
        if(nums[i]===0){ 
            [nums[i], nums[start]] = [nums[start], nums[i]]
            start++
            i++
        } else if(nums[i] === 2){
            [nums[i], nums[end]] = [nums[end], nums[i]]
            end--;
        } else {
            i++
        }
    }
}


/**
 * Test Case
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 */