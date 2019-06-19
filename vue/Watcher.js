// 订阅者
// observer的get操作执行时，会添加订阅者。添加之前要加入判断，只有在订阅者初始化时，才添加订阅者。

function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get() // 将自己添加到订阅器
}

Watcher.prototype = {
    update: function() {
        this.run()
    },
    run: function () {
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if (value !== oldVal){
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    get: function() {
        Dep.target = this;// 缓存自己
        let value = this.vm.data[this.exp];// 执行监听器的get
        Dep.target = null; // release
        return value
    }
}
