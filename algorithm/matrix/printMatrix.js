/**
 * @topic: 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10
 * 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 * @Date: 2019-06-24
 */

function printMatrix(matrix){
    let begin = matrix.length;
    let end = matrix[0].length;
    if (begin === 0 || end === 0) {
        return [];
    }
    let max_row = begin - 1;
    let max_col = end - 1;
    let min_row = 0;
    let min_col = 0;
    let result = [];
    while(max_col >= min_col && max_row >= min_row) {
        let clockwise = intercept(min_row, min_col, max_row, max_col, matrix);
        result = result.concat(clockwise);
        max_col--;
        max_row--;
        min_col++;
        min_row++;
    }
    return result;
}

function intercept(min_row, min_col, max_row, max_col, matrix) {
    let clockwise = [];
    for(let i = min_col; i <= max_col; i++) { // from left to right
        clockwise.push(matrix[min_row][i]);
    }
    for(let i = min_row + 1; i <= max_row; i++) { // from top to bottom
        clockwise.push(matrix[i][max_col]);
    }
    if (min_row !== max_row) {
        for(let i = max_col - 1; i >= min_col ; i--) { // from right to left
            clockwise.push(matrix[max_row][i]);
        }
    }
    if (min_col !== max_col) {
        for(let i = max_row -1; i > min_row ; i--) { // from bottom to top
            clockwise.push(matrix[i][min_row]);
        }
    }
    return clockwise;
}

let mat = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
let mat1 = [[1]];
let mat2 = [[]];
let mat3 = [[1,2,3], [4,5,6],[7,8,9]];
let mat4 = [[1,2,3,4], [5,6,7,8]];
let mat5 = [[1,2,3,4]];
let mat6 = [[1], [2], [3], [4]];
let value = printMatrix(mat6);
console.log(value);
