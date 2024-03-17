/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rowSize = matrix.length;
    let columnSize = matrix[0].length;
    for(let i=0; i<rowSize-1; i++){
        for(let j=i+1; j<columnSize; j++){
            [matrix[i][j], matrix[j][i]] =  [matrix[j][i], matrix[i][j]];
        }
    }

    for(let i=0; i<rowSize; i++) {
        for(let j=0; j<Math.floor(columnSize/2); j++) {
            [matrix[i][j], matrix[i][columnSize-1-j]] =  [matrix[i][columnSize-1-j], matrix[i][j]]
        }
    }
};

/**
 * Test Case
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 */