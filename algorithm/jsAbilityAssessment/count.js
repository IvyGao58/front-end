/**
 * @topic: 实现一个打点计时器，要求
         1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
         2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
         3、第一个数需要立即输出
 * @Date: 2019-07-22
 */


function count(start, end) {
    console.log(start++);
    var counter = setInterval(function() {
        if (start <= end) {
            console.log(start++);
        } else {
            clearInterval(counter)
        }
    }, 100);
    return {
        cancel: function() {
            clearInterval(counter);
        }
    }
}

let func = count(1,11);
