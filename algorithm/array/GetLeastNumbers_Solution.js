/**
 * @topic: 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 * @Date: 2019-07-17
 */

function GetLeastNumbers_Solution(input, k)
{
    if (!input.length) {
        return [];
    }
    // method1: quick sort
    // quickSort(0, input.length - 1, input);
    // method2: Array.sort(), you need to define compareFunction()
    input = input.sort((a, b) => {
        return a-b;
    });
    return input.length >= k ? input.slice(0, k) : [];
}

function quickSort(left, right, input) {
    let index = partition(left, right, input);
    if (left < index) {
        quickSort(left, index - 1, input);
    }
    if (index < right) {
        quickSort(index + 1, right, input);
    }
}

function partition(left, right, input) {
    let begin = left;
    let end = right;
    let pivot = begin;
    while(begin < end) {
        while(input[begin] < input[pivot] && begin < end) {
            begin++;
        }
        while(input[pivot] <= input[end] && begin < end) {
            end--;
        }
        swap(begin, end, input);
    }
    if(begin === end) {
        swap(begin, pivot, input);
    }
    return begin;
}

function swap(a, b, input) {
    let temp = input[a];
    input[a] = input[b];
    input[b] = temp;
}

let value = GetLeastNumbers_Solution([4,5, 8, 2, 1, 21, 22, 11], 4);
console.log(value);
