/**
 * @topic: 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。
 * 你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * @Date: 2019-08-13
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * input: [7,1,5,3,6,4]
 * output: 7
 * input: [7,6,4,3,1]
 * output: 0
 */

// 122, 264, 53
var maxProfit = function(prices) {
    let res = 0;
    let begin = 0;
    let end = 0;
    for (let i = 0; i< prices.length - 1; i++) {
        if (prices[i+1] <= prices[i]) {
            if (begin !== end) {
                res += (prices[end] - prices[begin]);
                begin = end;
            }
            begin++;
            end++;
        } else {
            end++;
        }
    }
    if (end > begin) {
        res += prices[end] - prices[begin];
    }
    return res;
};

let value = maxProfit([7,1,5,3,6,4]);
console.log(value);
