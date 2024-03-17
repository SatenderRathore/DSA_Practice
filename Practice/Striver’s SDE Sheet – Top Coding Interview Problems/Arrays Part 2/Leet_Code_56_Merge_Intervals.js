/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {// brute force
//     intervals.sort((a,b) => a[0] - b[0]);
//     let result = []
    
//     for(let i=0; i<intervals.length; i++){
//         let temp = intervals[i];
//         if(result.length && temp[1] <= result[result.length-1][1]) {
//             continue;
//         }

//         for(let j=i+1; j<intervals.length; j++) {
//             if(intervals[j][0] <= temp[1]) {
//                 temp[1] = Math.max(temp[1], intervals[j][1])
//             } else {
//                 break;
//             }
            
//         }
//         result.push(temp);

//     }

//     return result;
// };



var merge = function(intervals) {//Optimal
    intervals.sort((a,b) => a[0] - b[0])
    let result = [intervals[0]];

    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0] <= result[result.length-1][1]){
            result[result.length-1][1] = Math.max(intervals[i][1], result[result.length-1][1]);
        } else {
            result.push(intervals[i])
        }
    }

    return result
}


/**
 * Test Case
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 */