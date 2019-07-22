/**
 * @topic: 将函数 fn 的执行上下文改为 obj 对象
 * @Date: 2019-07-22
 */

function speak(fn, obj) {
    return fn.call(obj)
}

let value = speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'});
console.log(value);
