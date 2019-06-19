// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// input: http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe

const url1 = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
const url2 = 'http://www.nowcoder.com?key=1&key=2';
const url3 = 'http'
const skey = 'key';

function getUrlParam(sUrl, sKey) {
    // 取出参数段
    const regex = /^(http|https)(.*)(\?)(.*)/;
    const result = {};
    var arr = sUrl.match(regex);
    if (arr) {
        // 存储参数
        const params = arr[4];
        var splitStr = params.split(/&|#/);
        for(const str of splitStr) {
            var keyValue = str.split('=');
            if(keyValue) {
                var key = keyValue[0];
                var value = keyValue[1];
                saveToResult(result, key, value);
            }
        }
    }
    if (sKey) {
        console.log(result[sKey] || '');
    } else {
        console.log(result);
    }
}

function saveToResult(result, key, value) {
    if(!value) {
        return
    }
    if (key in result) {
        var existValue = result[key];
        if (!Array.isArray(existValue)) {
            result[key] = [result[key]]
        }
        result[key].push(value)
    } else {
        result[key] = value
    }
}

getUrlParam(url1, 'key');

getUrlParam(url2);

getUrlParam(url3);
