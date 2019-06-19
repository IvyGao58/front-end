// 对所有属性进行监听，监听器
function Observe(data) {
    if(!data || typeof data !== 'object') {
        return
    }
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}


function defineReactive(data, key, value) {
    // 递归遍历所有子属性
    Observe(value)
    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if(Dep.target){
                dep.addSub(Dep.target)
            }
            return value
        },
        set: function(newValue) {
            value = newValue;
            console.log('属性'+ key + '已被监听，当前值为:'+ newValue.toString())

            // 当有属性发生变化，要通知所有的订阅者
            dep.notify()
        }
    })
}

// 消息订阅器，收集订阅者，在属性变化的时候执行订阅者的更新函数。
function Dep() {
    this.subs = []
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub)
    },
    notify: function () {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
