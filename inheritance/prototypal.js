/**
 * @topic: 原型式继承 （采用ECMAScript5 Object.create()）
 * @Date: 2019-08-29
 */

let person = {
    name: 'Nicholas',
    friends: ['Van', 'Shelby']
};

let child = Object.create(person, {
    name: {
        value: 'Louis'
    }
});
child.friends.push('Charlotte');


let child2 = Object.create(person, {
    name: {
        value: 'Burke'
    }
});

console.log(child.name);
console.log(child.friends);
console.log(child2.name);
console.log(child2.friends);

/*
* ECMAScript5新增Object.create()规范了原型式继承。这个方法接收两个参数：1.用作新对象原型的对象
* 2. 一个为新对象定义额外属性的对象（类似于Object.defineProperties()的使用，每个属性都是通过自己的描述符定义的）
* 且若Object.create()第二个参数指明的对象属性与原型上的属性一致，会覆盖原型上的同名属性。
* 优点：适用于只想让一个对象与另一个对象保持一致的情况。不需要兴师动众的创建构造函数。
* 缺点：类型于基于原型链的继承，包含引用类型值的属性始终都会共享相应的值。
* */
