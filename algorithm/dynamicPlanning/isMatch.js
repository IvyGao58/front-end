/**
 * @topic: 10.正则表达式。给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * @Date: 2019-09-15
 * input:s = "aab", p = "c*a*b"
 * output: true;
 * input: s = "mississippi", p = "mis*is*p*."
 * output: false
 * 注： .匹配任意单个字符
 * * 匹配零个/多个前面的那个元素
 */

var isMatch = function(s, p) {
    return match(0,0, s, p);
};

function match(i, j, s, p) {
    let ans;
    if (j === p.length) {
        ans = (i === s.length);
    } else {
        // 比较当前步
        let firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');
        // 下一步包含特殊字符*，两种情况，1.没有匹配元素，越过当前p位置j. 2.*匹配多个s中的相同字符，持续后移
        if (j+1< p.length && p[j+1] === '*') {
            ans = (match(i, j+2, s, p) || firstMatch && match(i+1, j, s, p));
        } else {
            ans = firstMatch && match(i+1, j+1, s, p) // 当前步合法，下一步
        }
    }
    return ans;
}

let val = isMatch('', '.*');
console.log(val);
