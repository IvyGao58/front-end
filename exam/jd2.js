/*
* 重新排列数组。按照姓氏频率排列。若两个姓氏频率相同，则保持原数组顺序。
* input: ['ZHANG SAN', 'LI SI', 'WANG WU', 'WANG LIU', 'WANG QI', 'ZHANG WU','LI WU']
* output: ['WANG WU', 'WANG LIU', 'WANG QI', 'ZHANG SAN', 'LI SI', 'ZHANG WU', 'LI WU']
* 未提交OJ测试，通过用例。
* */


function main(arr) {
    var res = [];

    // 统计频率
    var reducer = arr.reduce((allitem, item) => {
        var target = item.split(' ')[0];
        if (target in allitem) {
            allitem[target]++;
        } else {
            allitem[target] = 1;
        }
        return allitem;
    }, {});

    // 按频率排序
    var collection = {};
    Object.keys(reducer).forEach(function (item) {
        var value = reducer[item];
        if (value in collection) {
            collection[value].push(item);
        } else {
            collection[value] = [item];
        }
    });

    // 插入
    for(var key in collection) {
        var values = collection[key];
        var temp = [];
        arr.forEach(function (item) {
            var target = item.split(' ')[0];
            if (values.indexOf(target) !== -1) {
                temp.push(item);
            }
        });
        res.unshift(...temp);
    }
    return res;
}

let arr = ['ZHANG SAN',
           'LI SI',
           'WANG WU',
           'WANG LIU',
           'WANG QI',
           'ZHANG WU',
           'LI WU'];
let val = main(arr);
console.log(val);


