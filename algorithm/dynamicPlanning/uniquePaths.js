/**
 * @topic: 62.不同路径。一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下
 * 或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径？
 * @Date: 2019-09-15
 * input: m = 3, n = 2
 * output: 3
 */

var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) {
        return 1;
    }
    let array = new Array(m);
    for(let i = 0; i<m; i++) {
        let sub_arr = new Array(n);
        for (let j = 0; j<n; j++) {
            if (i === 0 || j === 0) {
                sub_arr[j] = 1;
            } else {
                sub_arr[j] = 0;
            }
        }
        array[i] = sub_arr;
    }
    // 到达当前网格的路径数由左方格子和上方格子决定
    for (let i = 1; i<m; i++) {
        for(let j = 1; j<n; j++) {
            array[i][j] = array[i-1][j] + array[i][j-1];
        }
    }
    return array[m-1][n-1];
};

uniquePaths(7, 3);
