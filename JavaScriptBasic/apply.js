/**
 * @topic: 模拟apply()
 * @Date: 2019-08-24
 */

/*call与apply都是为改变this指向而存在的，作用相似，只是参数类型上的差别。apply()除了要绑定的对象外，传递的是一个参数数组。
* 用另一个对象来代替当前对象，应用对象上的方法。*/

Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw TypeError('not function');
    }
    context = context || window;
    context.fn = this;
    if (arguments[1]) {
        context.fn(...arguments[1]);
    } else {
        context.fn();
    }
    delete context.fn;
};

let dragon = {
    name: 'foo'
};

let mouse = {
    name: 'mouse',
    getLocate: function (location, nums) {
        console.log(this.name + ' is at ' + location + nums);
    }
};

mouse.getLocate.myApply(dragon, ['street', '1']);

