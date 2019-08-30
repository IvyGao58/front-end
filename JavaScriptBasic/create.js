/**
 * @topic: create方法
 * @Date: 2019-08-24
 */

function create(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}

/*
* 先创建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型。最后返回这个临时类型的一个新实例。
* 从本质上讲，object()对传入的对象，进行了一次浅复制。
* */
