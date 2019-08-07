/**
 * @topic: 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
         1、返回数组，格式为 key: value
         2、结果数组不要求顺序
 * @Date: 2019-08-07
 */

function iterate(obj) {
    var res = [];
    Object.keys(obj).forEach(function(key) {
        if (obj.hasOwnProperty(key)){
            res.push(key + ': ' + obj[key]);
        }
    });
    return res;
}


var C = function() {this.foo = 'bar'; this.baz = 'bim';};
C.prototype.bop = 'bip';
let value = iterate(new C());
console.log(value);
