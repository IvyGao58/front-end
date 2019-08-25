
/*
* 两种方式切换大小写，1.CapsLock，这将改变整体键盘大小写 2.shift+字母，这将临时改变大小写。设初试状态为小写。
* 输入第一行仅包含一个正整数n，表示字符串的长度(1<=n<=1000000)。输入第二行包含一个长度为n的字符串，仅包含大小写字母。
* output: 输出仅包含一个正整数，即最少的按键次数。
* 未提交OJ，通过测试用例 n = 6, arr = 'AaAAAA', 结果：8
* */

function main(n, str) {
    if (n<=0) {
        return 0;
    }
    var arr = str.split('');
    var lower = true;
    if (arr.length) {
        let len = arr.length;
        return deep(lower, len-1, arr);
    }
}

function deep(lower, index, numbers) {
    var number = numbers[index];
    var value = 0;
    if (index >= 0) {
        if (lower) {
            if (number.toLowerCase() === number) {
                value += deep(lower, index-1, numbers) + 1;
            } else {
                value +=  Math.min(deep(!lower, index-1, numbers) + 2, deep(lower, index-1, numbers) + 2);
            }
        } else {
            if (number.toUpperCase() === number) {
                value +=  deep(lower, index-1, numbers) + 1;
            } else {
                value +=  Math.min(deep(!lower, index-1, numbers) + 2, deep(lower, index-1, numbers) + 2);
            }
        }
    }
    return value;
}

let result = main(6, 'AaAAAA');
console.log(result);

/*
* Aa: 3
* AaB: 5
* Aab: 4
* AaBC: 6
* AaAAAA: 8
* */
