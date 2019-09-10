/**
 * @topic: 给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。
 * @Date: 2019-09-10
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 */

var rotate = function(matrix) {
    // 先转置矩阵
    for (let i = 0; i<matrix.length; i++) {
        for (let j = i; j<matrix[i].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // 再逐行翻转
    for (let i = 0; i<matrix.length; i++) {
        let len = matrix[i].length;
        for (let j = 0; j<parseInt(len/2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][len-j-1];
            matrix[i][len-j-1] = temp;
        }
    }
};

let val = rotate([[1,2,3],[4,5,6],[7,8,9]]);
