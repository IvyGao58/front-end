/**
 * @topic: 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，
 * 使用GetMedian()方法获取当前读取数据的中位数。
 * @Date: 2019-08-09
 */


let arr = [];
function insert(num)
{
    arr.push(num);
}

function getMedian(){
    if (!arr.length) {
        return null;
    }
    sorted();
    if (arr.length % 2 !== 0) {
        let middle = Math.floor(arr.length / 2);
        return arr[middle];
    } else {
        let middle_ceil = arr.length / 2;
        let middle_floor = middle_ceil - 1;
        return (arr[middle_ceil] + arr[middle_floor]) / 2;
    }
}

function sorted() {
    arr.sort(function(a, b) {
        return a-b;
    })
}

insert(5);
insert(6);
insert(4);
insert(1);
insert(3);
insert(2);
let value = getMedian();
console.log(value);
