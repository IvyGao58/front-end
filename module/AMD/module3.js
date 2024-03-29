/**
 * @topic: requireJS引入模块module2
 * @Date: 2019-08-29
 */

let requireJS = require('requirejs');
requireJS.config({
    paths: {
        module2: 'module2'
    },
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requireJS(['module2'], function(obj) {
    Object.keys(obj).forEach(key => {
        if (obj[key] instanceof Function) {
            console.log(key, obj[key]());
        } else {
            console.log(key, obj[key]);
        }
    })
});
