/**
 * @topic: 用setTimeOut实现setInterval
 * @Date: 2019-08-21
 */

/*递归，不断的执行setTimeout，来模拟setInterval的效果。*/
function createInterval() {
    let count = 1;
    let timer = null;
    function interval() {
        if (count <= 10) {
            timer = setTimeout(interval, 2 * 1000);
            console.log('第' + count++ + '秒');
        } else {
            timer && clearTimeout(timer);
            console.log('end');
        }
    }
    interval();
}

createInterval();
