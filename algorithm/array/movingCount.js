/**
 * @topic: 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，
 * 但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
 * 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 * @Date: 2019-08-10
 */


// 处理数位之和
function movingCount(threshold, rows, cols)
{
    // let row_v = [...Array(cols)].map(_ => 0);
    // let flag = [];
    // for (let i = 0; i<rows; i++) {
    //     flag.push(row_v);
    // } 此方式声明结果有误。
    let visited = [];
    for (let i = 0; i < rows; i++) {
        visited.push([]);
        for (let j = 0; j < cols; j++) {
            visited[i].push(0);
        }
    }
    return move(0, 0, rows, cols, threshold, visited);
}

function move(i, j, rows, cols, threshold, flag) {
    if (i< 0 || j < 0|| i >= rows || j >= cols || sum(i, j) > threshold || flag[i][j]) {
        return 0;
    }
    flag[i][j] = 1;
    return move(i-1, j, rows, cols, threshold, flag) +
        move(i+1, j, rows, cols, threshold, flag) +
        move(i, j-1, rows, cols, threshold, flag) +
        move(i, j+1, rows, cols, threshold, flag) + 1;
}

function sum(i, j) {
    let sum = 0;
    while(i) {
        sum += i%10;
        i = parseInt(i/10);
    }
    while(j) {
        sum += j%10;
        j = parseInt(j/10);
    }
    return sum;
}

let value = movingCount(3, 3, 4);
console.log(value);
