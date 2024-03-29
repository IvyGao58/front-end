/**
 * @topic: 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * @Date: 2019-07-18
 */


function printMinNumber(numbers)
{
    numbers = numbers.map(item => item.toString());
    numbers.sort(function(m, n) {
        let mn = m+n;
        let nm = n+m;
        if (parseInt(mn) > parseInt(nm)) {
            return 1;
        }
        if (parseInt(mn) < parseInt(nm)) {
            return -1;
        }
        return 0;
    });
    return numbers.join('');
}

let result = printMinNumber([321,123]);
console.log(result);
