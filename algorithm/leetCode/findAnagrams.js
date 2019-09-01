/**
 * @topic: 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
           字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * @Date: 2019-08-31
 * input: s: "cbaebabacd" p: "abc"
 * output: [0, 6]
 */

var findAnagrams = function(s, p) {
    if (s.length < p.length) return [];
    let p_letters = [...Array(26)].map(_ => 0);
    let between = [...Array(26)].map(_ => 0);
    let res = [];
    let a_code = 'a'.charCodeAt(0);
    for(let i = 0; i<p.length; i++) {
        let charCode = p.charCodeAt(i) - a_code;
        p_letters[charCode]++;
    }
    let start = 0;
    let end = 0;
    while(end < s.length) {
        let charCode = s.charCodeAt(end++) - a_code;
        between[charCode]++;
        while(between[charCode] > p_letters[charCode]) {
            between[s.charCodeAt(start++) - a_code]--;
        }
        if (p.length === end - start) {
            res.push(start);
        }
    }
    return res;
};

let val = findAnagrams('a', 'ab');
console.log(val);
