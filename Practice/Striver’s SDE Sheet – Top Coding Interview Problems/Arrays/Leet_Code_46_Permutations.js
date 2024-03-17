/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//     let output = []

//     if(nums.length === 1)return [nums] 

//     for(let i=0; i<nums.length; i++){
//         let temp = permute([...nums.slice(0,i), ...nums.slice(i+1)])
//         for(let j=0; j<temp.length; j++) {
//             output.push([nums[i], ...temp[j]])
//         }
        
//     }
//     return output
// };

var permute = function(nums) {
    let output = []
    let temp = []
    getPermutations(nums, output, temp )
    return output
}

var getPermutations = function(nums, output, temp){
    if(temp.length === nums.length) {
        output.push(Array.from(temp));
        return output;
    }

    for(let i=0; i<nums.length; i++) {
        if(temp.includes(nums[i])){
            continue;
        }
        temp.push(nums[i]);
        getPermutations(nums, output, temp);
        temp.pop();
    }
}

/**
 * Test case
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */