/**
 * @topic: 给定二维数组，判断是否连续。
 * @Date: 2019-08-06
 * input: [[0, 10], [8, 10], [10, 30]]
 * output: true
 * input: [[0, 10],[25, 30],[8, 20]]
 * output: false
 * 本题通过以上测试用例，但未在OJ上测试。
 */

function is_continue(array) {
    if (!array || !array.length) {
        return false;
    }
    let begins = array.map(item => item[0]);
    let ends = array.map(item => item[1]);
    let min = Math.min(...begins);
    let max = Math.max(...ends);
    // let max = Math.max.apply(null, ends);
    let res = [...Array(max)].map(_ => 0);
    if (min > 0) {
        array.push([0, min]);
    }
    while(array.length) {
        let target = array.shift();
        res.forEach((item, index) => {
            if (target[0] <= index && index <= target[1]) {
                res[index] = 1;
            }
        })
    }
    return !res.includes(0);
}


let value = is_continue([[0, 7],[19, 30],[8, 20]]);
console.log(value);
