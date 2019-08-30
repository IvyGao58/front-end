/**
 * @topic: 借用原型链的继承
 * @Date: 2019-08-29
 */

function Parent() {
    this.hasChild = true; // 实例属性
}

Parent.prototype.familyName = function () {  // 原型属性
    return 'Holmes';
};

function Child() {
    this.isChild = true;
}

// 让Child继承Parent
Child.prototype = new Parent();

// 继承完成（重写原型链后），再往原型上添加子类自己的方法
Child.prototype.nickName = function () {
    return 'nick';
};

let child = new Child();
console.log(child.hasChild);
console.log(child.isChild);
console.log(child.familyName());
console.log(child.nickName());

/*
* 原型继承存在的问题：
* 其一：包含引用类型值的原型属性会被所有实例共享。这也是属性不定义在原型对象，而定义在构造函数的原因。
* 若Parent方法中，有childList数组。通过原型继承，Child的原型实际上是Parent的实例对象。
* Parent的实例属性childList，会变成Child的原型属性。被Child实例共享。
* 其二：在创建子类型实例时，不能向超类型构造函数中传递参数。
* */
