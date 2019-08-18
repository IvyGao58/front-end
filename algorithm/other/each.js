/**
 * @topic: 编写each({}||[],function(key,value){})
 * @Date: 2019-08-13
 * 正确性未验证
 */

function each(data, fn) {
    if (Array.isArray(data)) {
        for (let item of data) {
            let res = fn.call(this,item);
            if (res) {
                console.log(res);
                continue;
            } else {
                break;
            }
        }
    }
    if (!Array.isArray(data) && data instanceof Object) {
        for (let key of Object.keys(data)){
            let res = fn.call(this, key, data[key]);
            if (res){
                console.log(res);
                continue;
            } else {
                break;
            }
        }
    }
}

let fn = function(key, value) {
    if (value) {
        return key.length > 2;
    } else {
        return value > 1;
    }
};

// let value = each([3,2,1], fn);
let value = each({'name': 'gao', 'od': 'xx'}, fn);
