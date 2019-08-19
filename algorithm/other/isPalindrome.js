/**
 * @topic: 判断是否为回文字符串
 * @Date: 2019-08-19
 */

/*1. reverse all*/
var isPalindrome = function(x) {
    x = x.toString();
    let reverse = x.split('').reverse();
    return reverse.join('') === x;
};

let val = isPalindrome('-121');
console.log(val);

/*2. reverse half， O(log10(n))*/
var isPalindrome_half = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reverse = 0;
    while(x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x/10);
    }
    return parseInt(reverse/10) === x ||reverse === x;
};

let val_half = isPalindrome_half('11311');
console.log(val_half);
