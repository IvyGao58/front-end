/**
 * @topic: CommonJS定义模块，模块只有一个出口module.exports
 * @Date: 2019-08-29
 */

function Person() {
    var name;
    this.getName = function () {
        return name;
    };
    this.setName = function (value) {
        name = value;
    }
}

let person = new Person();
person.setName('J');
console.log(person.name);
console.log(person.getName());

module.exports = {
  instance: new Person()
};
