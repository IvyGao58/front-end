/**
 * @topic: 寄生式继承
 * @Date: 2019-08-29
 */


let Person = {
    name: 'G',
    setAge: function (age) {
        this.age = age;
    }
};

/*创建一个用于封装继承过程的函数*/
function createAnother(targeObj) {
    let clone = Object.create(targeObj);
    clone.addName = function (name) {
        this.currentName = name;
    };
    return clone;
}

let another = createAnother(Person);
another.addName('Googoo');
console.log(another.currentName);
another.setAge(23);
console.log(another.age);

/*
* 寄生式继承与原型式继承紧密相关。创建一个仅用于封装继承过程的函数，并在内部以某种方式来增强对象。最后返回对象。
* createAnther函数接收一个参数，参数是要作为新对象基础的对象。然后将这个对象传递给Object.create()
* 在给clone对象添加自己的属性与方法，返回clone对象。
* 缺点：与借用构造函数类似。很难做到函数复用。
* */
