/**
 * @topic: 用promise实现一个sleep函数
 * @Date: 2019-08-06
 */

function sleep() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('hello');
        }, 2 * 1000)
    })
}

let value = sleep();
value.then(val => console.log(val));
