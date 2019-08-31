/**
 * @topic: requireJS引入module1,定义module2
 * @Date: 2019-08-29
 * AMD(asynchronous module definition) 浏览器端模块化开发方案。非JS原生支持，使用requireJS
 */

let requireJS = require('requirejs');
requireJS.config({
    paths: {
      module1: 'module1'
    },
    nodeRequire: require
});

requireJS.define(['module1'], function (module1) {
    let func = module1.binding;
    let instance = new func();
    instance.today = 'Friday';
    // console.log('name: ', instance.getName());
    // console.log('today: ', instance.today);
    return instance;
});
