/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows<1){
        return []
    } else if(numRows === 1) {
        return [[1]]
    } else if(numRows === 2) {
        return [[1], [1,1]]
    } else {
        let base = [[1], [1,1]]
        for(let i=2; i<numRows; i++){
            let nextRowItems = []
            for(let j=0; j<=i; j++){
                if(j === 0 || j === i){
                    nextRowItems.push(1)
                } else{
                    const baseLength = base.length
                    const item = base[baseLength-1][j-1] + base[baseLength-1][j]
                    nextRowItems.push(item)
                }
            }
            base.push(nextRowItems)
        }
        return base
    }
};


/**
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */