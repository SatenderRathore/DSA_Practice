
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroRowIndex = []
    let zeroColumnsIndex = []

    let rowLength = matrix.length
    let columnLength = matrix[0].length
   
    for(let i=0; i<rowLength; i++) {
        for(let j=0; j<columnLength; j++) {
             if(matrix[i][j] === 0){
                if(!zeroRowIndex.includes(i)){
                    zeroRowIndex.push(i)
                }
                if(!zeroColumnsIndex.includes(j)){
                    zeroColumnsIndex.push(j)
                }
             }
        }
    }

    for(let i=0; i<zeroRowIndex.length; i++) {
        for(let j=0; j<columnLength; j++){
            matrix[zeroRowIndex[i]][j]=0
        }
    }

    for(let j=0; j<zeroColumnsIndex.length; j++){
        for(let i=0; i<rowLength; i++){
            matrix[i][zeroColumnsIndex[j]]=0
        }
    }
};


/**
 * Test case::
 * 
 * let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
 * setZeroes(matrix)
 * console.log(matrix)
 * 
 */

