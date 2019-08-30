/**
 * @topic: 寄生组合式继承
 * @Date: 2019-08-30
 */

function Parent() {
    this.familyName = 'Holmes';
    this.members = ['grandparents', 'children'];
}

Parent.prototype.sayHi = function () {
    console.log('Good morning');
};

function Child() {
    Parent.call(this);
    this.childName = 'Nick';
}

function inherit(Parent, Child) {
    let prototype = Object.create(Parent.prototype);
    prototype.constructor = Child;
    Child.prototype = prototype;
}

inherit(Parent, Child);
Child.prototype.answerParent = function() {
    console.log('Have a nice day');
};

let child = new Child();
child.sayHi();
child.answerParent();
console.log(child.familyName);
console.log(child.childName);

/*在组合继承中，子类绑定父类构造函数、用父类实例重写子类原型。这两个操作都调用了父类构造函数，一共两次。
* 寄生组合继承改进这种情况。主要思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的
* 无非是超类型的原型的一个副本。所以在将创建的子类对象上执行父类构造函数，实现对父类实例属性的继承，
* 通过自定义的inherit方法，得到父类原型的一个副本（Object.create）。通过这两步来实现继承。*/

