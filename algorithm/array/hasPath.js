/**
 * @topic: 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，
 * 每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，
 * 则之后不能再次进入这个格子。 例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，
 * 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 * @Date: 2019-08-10
 */


// matrix 一维数组
// 切换其他语言 了解参数数据类型，如char[] matrix, int rows, int cols, char[] str
function hasPath(matrix, rows, cols, path)
{
    if (!path) {
        return null;
    }
    let mask = [];
    mask.push([...Array(matrix.length).map(_ => 0)]);
    for (let i = 0; i< rows; i++) {
        for (let j = 0; j< cols; j++) {
            if (helper(matrix, i, j, rows, cols, mask, 0, path)) {
                return true;
            }
        }
    }
    return false;
}

function helper(matrix, i, j, rows, cols, mask, k, path) {
    let index = i * cols + j;
    if (i < 0 || j < 0 || i >= rows || j >= cols || mask[index] === 1 || path[k] !== matrix[index]) {
        return false;
    }
    if (k === path.length - 1) return true;
    mask[index] = 1;
    if (helper(matrix, i-1, j, rows, cols, mask, k+1, path) ||
        helper(matrix, i+1, j, rows, cols, mask, k+1, path) ||
        helper(matrix, i, j-1, rows, cols, mask, k+1, path) ||
        helper(matrix, i, j+1, rows, cols, mask, k+1, path)) {
        return true;
    }
    mask[index] = 0;
    return false;
}


let mat = ['a', 'b', 'c', 'e', 's', 'f', 'c', 's', 'a', 'd', 'e', 'e'];
let path = ['b', 'c', 'c', 'e', 'd'];
let row = 3;
let col = 4;
let value = hasPath(mat, row, col, path);
console.log(value);
