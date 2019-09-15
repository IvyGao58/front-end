/**
 * @topic: 5.最长回文子串 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @Date: 2019-09-14
 * input: babad
 * output: bab
 */

var longestPalindromeDp = function(s) {
    let len = s.length;
    if (len === 0 || len === 1) {
        return s;
    }
    // 创建二维数组
    let dp = new Array(len);
    for (let i = 0; i<len; i++) {
        let sub = [];
        for (let j = 0; j<len; j++) {
            sub.push(0);
        }
        dp[i] = sub;
    }

    let start = 0;
    let max = 1;

    // 回文数为2的情况
    for (let i = 0; i<len; i++) {
        dp[i][i]=1;
        if (i<len-1 && s[i] === s[i+1]) {
            dp[i][i+1] = 1;
            start = i;
            max = 2;
        }
    }

    // 回文数为3+的情况
    for (let i = 3; i<=len; i++) {
        for(let j = 0; j<len-i+1; j++) {
            let endIdx = i+j-1;
            if (s[j] === s[endIdx] && dp[j+1][endIdx-1]) {
                dp[j][endIdx] = 1;
                start = j;
                max = i;
            }
        }
    }
    // 用start，max在s上取子串
    return s.substr(start, max);
};

let val = longestPalindromeDp('ccc');
console.log(val);
