/**
 * @topic: 借用构造函数继承
 * @Date: 2019-08-29
 */

function Parent(newMember) {
    this.members = ['father', 'mother', 'child'];
    this.members.push(newMember);
}

Parent.prototype.address = function () {
    return '5th avenue';
};

function Child() {
    Parent.call(this, 'grandParents');

    // 调用超类构造函数后，再添加应该在子类型中定义的属性
    this.childName = 'Charlotte';
}

let child1 = new Child();
child1.members.push('baby');
console.log(child1.members);
console.log(child1.childName);

let child2 = new Child();
console.log(child2.members);


/*
* 由上例可看到，Child的两个实例，对引用类型对象操作互不影响。
* 借用构造函数的思想是：在子类构造函数内部调用超类的构造函数。因为函数是在特定环境中执行代码的对象。
* 因此通过使用apply, call方法可以在新创建的对象上执行构造函数。并向父类构造函数传参。
* 存在的问题：父类型的原型中的方法，对子类型不可见。方法都在构造函数里定义， 函数难以复用。
* */
