/**
 * @topic: new操作
 * @Date: 2019-08-24
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

/*1.返回一个函数*/
function myNew(func) {
    return function() {
        let obj = {};
        obj.__proto__ = func.prototype;
        func.call(obj, ...arguments);
        return obj;
    }
}

let perF = myNew(Person);
let per = perF('k', 20);
console.log(per.name);
console.log(per.age);

/*2.返回一个对象*/
function myNew2(func) {
    let obj = {};
    obj.__proto__ = func.prototype;
    func.apply(obj, [...arguments].slice(1));
    return obj;
}

let perO = myNew2(Person, 'L', 21);
console.log(perO.name);
console.log(perO.age);

/*new操作构造一个新的对象，让对象的内部原型__proto__指向构造函数的原型，再将构造函数的上下文绑定为此对象。
* 注意对参数的处理。*/
