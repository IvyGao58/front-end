// 需要频繁操作DOM，建立一个fragment片段，将需要解析的DOM存入fragment片段里再处理。
function Compile(el, vm) {
    this.vm = vm
    this.el = document.querySelector(el)
    this.fragment = null
    this.init()
}

Compile.prototype = {
    init: function () {
        if(this.el) {
            this.fragment = this.nodeToFragment(this.el)
            this.compileElement(this.fragment)
            this.el.appendChild(this.fragment)
        } else {
            console.log('DOM元素不存在')
        }
    },
    // 处理指令
    compile: function(node) {
        let nodeAttrs = node.attributes;
        let self = this;
        Array.prototype.forEach.call(nodeAttrs, function(attr) {
            let attrName = attr.name
            if(self.isDirective(attrName)){
                let exp = attr.value;
                let dir = attrName.substring(2);
                if(self.isEventDirective(dir)) { // v-on 事件指令
                    self.compileEvent(node, dir, self.vm, exp)
                } else { // v-model 指令
                    self.compileModel(node, dir, self.vm ,exp)
                }
            }
            node.removeAttribute(attrName)
        })
    },
    isDirective: function(attrName) {
        return attrName.indexOf('v-') === 0
    },
    isEventDirective: function(attrName) {
        return attrName.indexOf('on:') === 0
    },
    compileEvent: function(node, dir, vm, exp) {
        console.log('compileEvent dir ', dir)
        let eventType = dir.split(':')[1]
        let cb = vm.methods && vm.methods[exp]
        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm), false)
        }
    },
    compileModel: function(node, dir, vm , exp) {
        let self = this
        let val = this.vm[exp]
        this.modelUpdater(node, val)
        new Watcher(this.vm, exp, function(value) {
            self.modelUpdater(node, value)
        })

        node.addEventListener('input', function(e) {
            let newValue = e.target.value
            if(val === newValue) {
                return;
            }
            self.vm[exp] = newValue
            val = newValue
        })
    },
    modelUpdater: function(node, value) {
        node.textContent = typeof value === 'undefined' ? '' : value
    },
    nodeToFragment: function(el) {
        let fragment = document.createDocumentFragment()
        let child = el.firstChild;
        while(child) {
            fragment.appendChild(child)
            child = el.firstChild
        }
        return fragment
    },

    // 处理模板
     compileElement: function(el) {
        let childNodes =  el.childNodes;
        let self = this;
        let list = [];
        list.slice.call(childNodes).forEach(function (node) {
            let reg = /\{\{(.*)\}\}/;
            let text = node.textContent; // 表示一个节点及其后代的文本内容
            if (self.isElementNode(node)) {
                self.compile(node);
            }
            else if(self.isTextNode(node) && reg.test(text)){ // 符合{{}}这种模板的形式
                self.compileText(node, reg.exec(text)[1])
            }

            if(node.childNodes && node.childNodes.length) {
                self.compileElement(node)
            }
        })
    },

    compileText: function(node, exp) {
        let self = this;
        let initText = this.vm[exp];
        this.updateText(node, initText) // 将初始化的数据 初始化到视图中
        new Watcher(this.vm, exp, function(value) {
            self.updateText(node, value)
        })

    },

    isTextNode: function(node) {
        return node.nodeType === 3
    },

    isElementNode: function(node) {
        return node.nodeType === 1
    },

    updateText: function(node, value) {
        node.textContent = typeof value === undefined ? '' : value
    }
}

