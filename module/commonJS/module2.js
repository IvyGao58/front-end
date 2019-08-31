/**
 * @topic: CommonJS加载模块使用require方法
 * @Date: 2019-08-29
 */

let person = require('./module1');
person.instance.setName('G');
console.log(person.instance.getName());
