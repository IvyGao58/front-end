/**
 * @topic: 为 Array 对象添加一个去除重复项的方法，ps: 不给对象去重，但给NaN去重
 * @Date: 2019-08-18
 * input: [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
 * output: [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
 */

// es6 Array.from()、Array.of()
function uniq(arr) {
    return Array.from(new Set(arr));
}

// es6 includes(), find(), findIndex(), flat(), flatMap(), entries(), keys(), values()...
Array.prototype.uniq2 = function () {
    let moveObj = [];
    this.forEach(item => {
        if (!moveObj.includes(item)) {
            moveObj.push(item);
        }
    });
    return moveObj;
};

Array.prototype.uniq = function () {
    var moveObj = [];
    var flag = true;
    this.forEach(function(item) {
        if (moveObj.indexOf(item) === -1) {
            if (item !== item ) {
                if (flag) {
                    moveObj.push(item);
                    flag = false;
                }
            } else {
                moveObj.push(item);
            }
        }
    });
    return moveObj;
};

let arr = [false, true, undefined, null, NaN, 0, 1, {'name' : 1}, {'name': 1}, 'a', 'a', NaN];
let ans = arr.uniq();
console.log(ans);
