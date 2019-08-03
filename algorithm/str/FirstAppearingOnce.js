/**
 * @topic: 请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，
 * 第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
 * @Date: 2019-08-03
 * 注意输入输出形式
 */


let map = {};
function Init()
{
    map = {};
}

//Insert one char from stringstream
function Insert(ch)
{
    if (ch in map) {
        map[ch]++;
    } else {
        map[ch] = 1;
    }
}


//return the first appearence once char in current stringstream
function firstAppearingOnce()
{
    for (let ch in map) {
        if (map.hasOwnProperty(ch)) {
            if (map[ch] === 1) {
                return ch;
            }
        }
    }
    return '#';
}
