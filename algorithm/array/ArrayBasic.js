// 数组求和 pass
function sum(arr) {
    return arr.reduce(function(accumulator,currentValue){
        return accumulator + currentValue
    })
}


// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 pass
// input: [1, 2, 3, 4, 2], 2
// output:
function remove(arr, item) {
    return arr.filter(function(element) {
        return element !== item
    })
}

// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回 pass
// input: [1, 2, 2, 3, 4, 2, 2], 2
// output: [1, 3, 4]
// 遍历删除 用逆向循环

// const arr = [1, 2, 2, 3, 4, 2, 2]
function removeWithoutCopy(arr, item) {
    for(var i = arr.length - 1; i>=0; i--) {
        if(item === arr[i]) {
            arr.splice(i, 1)
        }
    }
    return arr
}

// 为 Array 对象添加一个去除重复项的方法，条件同上 not pass
// 注：此处没有对引用类型去重 {}
let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];

Array.prototype.uniqueExceptObject = function() {
    return Array.from(new Set(this))
}
console.log(arr.uniqueExceptObject())

// 注：此处对引用类型、NaN去重 (未提交测试，拓展探讨)
Array.prototype.uniq = function () {
    var obj = {};
    return this.filter(function(item){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}


// 在数组末尾添加一个元素，但不改变原数组，返回新数组
function append(arr, item) {
    // var newArr = arr.map(function(child){
    //     return child
    // })
    // newArr.push(item)
    // return newArr
    return arr.slice(arr.length-1).push(item)
}

const appendArr = [1, 2, 3]
// console.log(append(appendArr, 4))


// 删除数组最后一个值，但不改变原数组，返回新数组。 pass
function truncate(arr) {
    return arr.slice(0, -1)
}
const truncateArr = [2, 3, 4]
// console.log(truncate(truncateArr))


// 向数组添加新元素，并返回一个新数组，不改变原来的数组。
function prepend(arr, item) {
    const copy = arr.slice(0)
    copy.splice(0,0,item)
    return copy
}
const result = prepend([1,2,3], 9)
console.log(result)
