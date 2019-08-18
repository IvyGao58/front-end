/**
 * @topic: 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting
 * 属性指向给定的 greeting 变量。
 * @Date: 2019-08-18
 */

function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
}

var C = function(name) {this.name = name; return this;};
var obj1 = new C('Rebecca');
alterObjects(C, 'What\'s up');
console.log(obj1.greeting);
