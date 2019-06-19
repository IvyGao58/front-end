Object.prototype.callOrigin = function(thisMe, Arguments) {
    var target = arguments[0] || windows
    target.fn = this;
    var args = [];
    for(var i = 1; i < arguments.length; i ++){
        args.push('arguments['+ i +']');
    }
    var result = eval('target.fn(' + args.join(',')+')');

    //把创建的fn属性删除
    delete target.fn;
    return result;
};

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.callOrigin(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
