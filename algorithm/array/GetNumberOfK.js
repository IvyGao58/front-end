/**
 * @topic: 统计一个数字在排序数组中出现的次数。
 * @Date: 2019-07-25
 */

function getNumberOfK(data, k)
{
    let count = 0;
    let index = data.indexOf(k);
    while(data[index] === k) {
        count++;
        index++;
    }
    return count;
}

// 运行时间太长
function getNumberOfK1(data, k)
{
    return data.reduce(function(accumulator, current) {
        if (current === k) {
            accumulator++;
        }
        return accumulator;
    }, 0);
}


// 二分法 pass
function getNumberOfK2(data, k) {
    if (data.length && k) {
        let begin = getFirst(data, k, 0, data.length-1);
        let end = getLast(data, k, 0, data.length-1);
        if (begin > -1 && end > -1) {
            return end-begin + 1;
        }
    }
    return 0;
}

function getFirst(data, k, start, end) {
    if (start > end) {
        return -1;
    }
    let mid = parseInt((start + end) / 2);
    if (data[mid] === k) {
        if (mid > 0 && data[mid-1] !== k || mid===0) {
            return mid;
        } else {
            end = mid - 1;
        }
    }
    else if (data[mid] < k) {
        start = mid + 1;
    }
    else {
        end = mid - 1;
    }
    return getFirst(data, k, start, end);
}

function getLast(data, k , start, end) {
    if (start > end) {
        return -1;
    }
    let mid = parseInt((start + end) / 2);
    if (data[mid] === k) {
        if (mid < data.length - 1 && data[mid + 1] !== k || mid === (data.length - 1)) {
            return mid;
        } else {
            start = mid + 1;
        }
    }else if (data[mid] > k) {
        end = mid -1;
    }
    else {
        start = mid + 1;
    }
    return getLast(data, k, start, end);
}

let value = getNumberOfK2([7,6,5,5,5,4], 5);
console.log(value);
