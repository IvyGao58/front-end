/**
 * @topic: this的用法
 * @Date: 2019-08-21
 */

/*1. 构造函数绑定，this指向new的对象*/
var date = 'Wednesday';
function ConstructorBind() {
    this.date = 'Monday';
    this.getDate = function() {
        return this.date;
    }
}

let cb = new ConstructorBind();
console.log(cb.getDate());  // Monday

/*2. 默认绑定。当作为普通函数被调用时，this指向全局对象window。严格模式下，指向undefined*/
function func1() {
    console.log(this);
}

function func2() {
    'use strict';
    console.log(this);
}

func1();
func2();

/*3.隐式绑定。当作为对象方法被调用时，会发生隐式绑定，this指向调用该方法的对象。*/
let hiddenBind = {
    name: 'Charlotte',
    getName: function() {
        return this.name;
    }
};
console.log(hiddenBind.getName());

/*4. 硬绑定，通过call，apply，bind等方法改变this指向。传入null/undefined，绑定至全局对象，传入其他原始值（数字，字符串，布尔值）
* 将绑定到对应的包装对象。*/
var name = 'freedom';
var obj = {
    name: 'strick',
    getName: function() {
        return this.name;
    },
    getThis: function() {
        return this;
    }
};
let val1 = obj.getName.call(null); // 浏览器中输出为freedom, 此处输出为undefined
console.log(val1);

let val2 = obj.getThis.call(false);
console.log(val2); //[Boolean:false]



