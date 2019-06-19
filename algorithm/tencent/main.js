// 第一题
// 建筑采用模块化方式，每层随着高度增加而减小。一层为一个模块。每天会运来一个模块，如果出现调度失误，会导致当天运来的模块不是放在最下面的
// 这种情况下，当天就不会进行任何建设。要等到下层都建设好以后，这层模块才能放上去。假定上一层面积比下一层小1。

Construction(1, [3,1,2])

function Construction(n, arr) {
    let waitList = [];
    let past = [];
    for(let i = 0; i< arr.length; i++) {
        if (i === 0) {
            console.log(arr[i]);
            past.push(arr[i]);
        } else {
            if (past[past.length - 1] - arr[i]> 1) {
                waitList.push(arr[i]);
                console.log();
            } else {
                // 输出当前
                let ready = [];
                ready.push(arr[i]);
                past.push(arr[i]);
                let value = arr[i];
                // 输出缓存
                let remove = [];
                while(waitList.length > 0) {
                    let can = waitList.filter(item => {
                        return value - item === 1;
                    });
                    if(!can) {
                        break;
                    }
                    for(let j = waitList.length -1; j >= 0 ; j--) {
                        if(value - waitList[j] === 1) {
                            ready.push(waitList[j]);
                            value = waitList[j];
                            past.push(waitList[j]);
                            remove.push(waitList[j]);
                        }
                    }
                    remove.forEach(item => {
                        const locate = waitList.indexOf(item)
                        if(locate !== -1){
                            waitList.splice(locate, 1)
                        }
                    })
                }
                console.log(ready.join(' '));
            }
        }
    }
}
