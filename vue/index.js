function SelfVue(options) {
    let self = this;
    this.methods = options.methods;
    this.data = options.data;

    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key)
    })

    Observe(this.data);
    new Compile(options.el, this)
    options.mounted.call(this)
}

SelfVue.prototype = {
    proxyKeys: function(key) {
        let self = this;
        Object.defineProperty(this, key, {
            configurable: true,
            enumerable: false,
            get: function proxyGetter() {
                return self.data[key]
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal
            }
        })
    }
}
