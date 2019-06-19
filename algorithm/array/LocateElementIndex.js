// 找出元素 item 在给定数组 arr 中的位置
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

function indexOf(arr, item) {
    return arr.indexOf(item)
}

const arr = [1, 2, 3, 4]
let index = indexOf(arr, 3)
console.log(index)
