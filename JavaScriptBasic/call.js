/**
 * @topic: 模拟call()
 * @Date: 2019-08-24
 */

/*call可用于改变this的指向。用一个新对象代替另一个对象调用方法。可以将一个函数的对象的上下文从初始上下文改变为指定的新对象。
* 接受参数列表*/

Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('not function');
    }
    context = context || window;
    context.fn = this;
    let args = [];
    for(let i = 1; i<arguments.length; i++) {
        args.push(arguments[i]);
    }
    if (args.length) {
        context.fn([...args]);
    } else {
        context.fn();
    }
    delete context.fn;
};

let dragon = {
    name: 'foo'
};

let mouse = {
    name: 'tom',
    getLocate: function (location) {
        console.log(this.name + ' is at the ' + location);
    }
};

mouse.getLocate.myCall(dragon);
