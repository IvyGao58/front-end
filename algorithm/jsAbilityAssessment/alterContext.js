/**
 * @topic: 将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
 * @Date: 2019-08-17
 */


function alterContext(fn, obj) {
    return fn.call(obj);
}

let testObj = {
    name: 'Googoo',
    greeting: 'achieving'
};

let fn = function() {return this.greeting + ', ' + this.name + '!'; };
let value = alterContext(fn, testObj);
console.log(value);
