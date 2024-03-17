/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = [];
    getAllParenthesis(n, 0, 0, '', output);
    return output;
};

function getAllParenthesis(size, open, closed, temp, output) {
    if(closed === size){
            output.push(temp)
            return;
    } else {
        if(open > closed){           
            getAllParenthesis(size, open, closed+1, temp+')', output)
        }
        if(size > open){
            getAllParenthesis(size, open+1, closed, temp+'(', output)
        }
    }   
}


/**
 * Test Case
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 */