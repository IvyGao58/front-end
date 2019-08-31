/**
 * @topic: requireJS定义一个独立模块
 * @Date: 2019-08-29
 */

let requireJS = require('requirejs');
requireJS.config({
    nodeRequire: require
});

requireJS.define(function () {
    return {
        binding: function () {
            this.name = 'freedom';
            this.getName = function() {
                return this.name;
            }
        }
    }
});
