
function findLongestPalindromeByDelete(str) { // 删除元素，得到最长回文子串（子串不一定在字符串中是连续的）
    if(str === null || str.length === 0) {
        return;
    }
    let begin = 0;
    let answer = 0;
    // even
    for(let i = 0; i< str.length; i++) {
        let start = i;
        let end = i + 1;
        while(end < str.length && start >=0 && str.charAt(start) === str.charAt(end)) {
            if (end - start + 1 > answer) {
                begin = start;
                answer = end - start + 1;
            }
            start--;
            end++;
        }
    }

    // odd
    for(let i= 1; i < str.length; i++) {
        let start = i - 1;
        let end = i + 1;
        while(start >= 0 && end < str.length && str.charAt(start) === str.charAt(end)) {
            if(end - start + 1 > answer) {
                begin = start;
                answer = end - start + 1;
            }
            start--;
            end++;
        }
    }
    console.log('answer', answer);
    return (str.length - answer);
}

require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    findLongestPalindromeByDelete(line);
});
