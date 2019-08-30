/**
 * @topic: 组合继承，将原型链和借用构造函数的技术结合到一起
 * @Date: 2019-08-29
 */

/*核心思想，使用原型链实现对原型属性和方法的继承，借用构造函数实现对实力属性的继承*/

function Parent(familyName) {
    this.familyName = familyName;
    this.members = ['Dad', 'Mum', 'child'];
}

Parent.prototype.address = function () {
    return '3th Avenue';
};

function Child(familyName) {
    // 继承实例属性
    Parent.call(this, familyName);
    this.childName = 'Nicholas';
}

// 继承原型属性
Child.prototype = new Parent();

// 明确构造函数
Child.prototype.constructor = Child;

// 子类添加原型方法
Child.prototype.getName = function () {
    return this.childName;
};

let child1 = new Child();
child1.members.push('brother');
console.log(child1.members);

let child2 = new Child();
console.log(child2.members);
console.log(child2.address());


/*
* 组合继承的方式是JS中最常用的继承方式。
* 上例中，Child在构造函数中绑定Parent的构造函数，并向其传递参数familyName。Child继承Parent构造函数中的属性。
* 将Child的原型对象指向Parent的实例对象，并调整原型属性中的constructor指针。
* 完成原型的重写后，再在子类原型上添加新方法。
* */
