/**
 * @topic: 完成函数 createModule，调用之后满足如下要求：
         1、返回一个对象
         2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
         3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值
 * @Date: 2019-08-18
 */

function createModule(str1, str2) {
    return {
        greeting: str1,
        name: str2,
        sayIt: function() {
            return this.greeting + ', ' + this.name;
        }
    };
}

function createModule2(str1, str2) {
    function CreateObj() {
        this.greeting = str1;
        this.name = str2;
    }
    CreateObj.prototype.sayIt = function() {
        return this.greeting + ', ' + this.name;
    };
    return new CreateObj();
}

function createModule3(str1, str2) {
    function CreateObj() {
        this.greeting = str1;
        this.name = str2;
        this.sayIt = function() {
            return this.greeting + ', ' + this.name;
        }
    }
    return new CreateObj();
}

function createModule4(str1, str2) {
    function CreateObj() {
        var obj = Object();
        obj.greeting = str1;
        obj.name = str2;
        obj.sayIt = function () {
            return this.greeting + ', ' + this.name;
        };
        return obj;
    }
    return new CreateObj();
}

let object = createModule4('good', 'morning');
console.log(object.sayIt());
