/**
 * @topic: 类似于编译器, 给定几行代码，求最后一行代码左边的值
 * @Date: 2019-09-06
 * input: xx=2; yy=xx; cc=yy+2;
 * output: 输出cc的值
 * 通过用例，未提交测试
 */

function compile(lines) {
    let variables = {};
    for (let line of lines) {
        line = line.replace(';', '');
        let arr = line.split('=');
        let key = arr[0];
        let val = arr[1];
        if (val.indexOf('+') === -1) {
            if (Object.keys(variables).indexOf(val) !== -1) {
                variables[key] = variables[val];
            } else {
                variables[key] = isNaN(val) ? val : Number(val);
            }
        } else {
            let right = val.split('+');
            if (!Array.isArray(right)) {
                right = [right];
            }
            let temp = null;
            for(let i = 0; i<right.length; i++) {
                let keys = Object.keys(variables);
                if (keys.includes(right[i])) {
                    if (!temp) {
                        temp = variables[right[i]];
                    } else {
                        temp += variables[right[i]];
                    }
                } else {
                    let ans;
                    if (isNaN(right[i])) {
                        ans = Object.keys(variables).includes(right[i]) ? right[i] : null;
                    } else {
                        ans = Number(right[i]);
                    }
                    if (temp) {
                        variables[key] = temp + ans;
                    } else {
                        variables[key] = right.length === 1 ? ans: null;
                    }
                }
            }
        }
    }
    let last = Object.keys(variables).pop();
    return variables[last];
}

let value = compile(['xx=-2;', 'yy=xx;' , 'zz=yy+2']);
console.log(value);
