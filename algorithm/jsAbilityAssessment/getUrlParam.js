/**
 * @topic: 获取 url 中的参数
         1. 指定参数名称，返回该参数的值 或者 空字符串
         2. 不指定参数名称，返回全部的参数对象 或者 {}
         3. 如果存在多个同名参数，则返回数组
 * @Date: 2019-08-18
 * input: http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe
 * output: [1, 2, 3]
 */


function getUrlParam(sUrl, sKey) {
    var params = sUrl.split('?');
    var regex = /(\w+)=([0-9])/g;
    var match;
    var args = [];
    var res = [];
    while(match = regex.exec(params)) {
        args.push([match[1], match[2]]);
    }
    if (sKey) {
        args.forEach(function(item) {
            if (item[0] === sKey) {
                res.push(item[1]);
            }
        });
        if (!res.length) {
            res.push('');
        }
        return res.length === 1 ? res.pop():res;
    } else {  // 不指定参数名称，返回全部的参数对象 或者 {}
        if (!params) {
            return {};
        }
        args.forEach(function(item) {
            if (!(item[0] in res)) {
                res[item[0]] = [];
            }
            res[item[0]].push(item[1]);
        });
        return res;
    }
}

let value = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe');
console.log(value);
