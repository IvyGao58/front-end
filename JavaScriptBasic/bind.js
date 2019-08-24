/**
 * @topic: 模拟bind()函数
 * @Date: 2019-08-24
 */

/*
* 参数：要绑定的对象，参数列表。参数的传递与call()类似。但bind方法返回一个新的函数。
* 注：如果将bind的返回函数作为构造函数，用new操作符创建对象。此时bind指定的this值会失效，但传入的参数仍然生效。
* */

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw TypeError('not function');
    }
    context = context || window;
    let args = [...arguments].slice(1);
    let _this = this;
    let fNOP  = function () {};
    let fBound  = function () {
        let bindObj = this instanceof fBound ? this : context; // 模拟用new操作符创建对象。此时bind指定的this值会失效
        return _this.apply(bindObj, args.concat(...arguments));  // arguments是指bind返回的函数传入的参数
    };
    // fBound.prototype = this.prototype 当修改fBound原型时，会修改绑定函数的原型。因此要用fNOP空函数来中转
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
};

let dragon = {
    name: 'foo'
};

let name = 'Gao';

function Animal(location, nums) {
    console.log(this.name + ' is at ' + location + ' ' + nums);
}

Animal.prototype.age = 1000;

let func = Animal.myBind(dragon, 'LuoLv');
func(); // 作为普通函数

func.prototype.age = 2500; // 作为构造函数

let fc = new func('Street');

console.log('func', func.prototype.age);
console.log('Animal', Animal.prototype.age);


