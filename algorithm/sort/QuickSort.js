// 04-10
function quickSort(left, right, arr) {
    const locate = partition(left, right, arr);
    if(left < locate) {
        quickSort(left, locate - 1, arr)
    }
    if(locate < right) {
        quickSort(locate + 1, right, arr);
    }
}

function partition(begin, end, arr) {
    let left = begin;
    let right = end;
    let pivot = arr[begin];
    while(left < right) {
        // 从右到左
        while (arr[right] > pivot && left < right) right--;
        while(arr[left] <= pivot && left < right) left++;
        if(left < right){
            swap(left, right, arr)
        }
    }
    swap(begin, left, arr)
    return left;
}

function swap(i, j, arr) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const arr = [35, 85, 85, 45, 31, 17, 96, 50];
quickSort(0, arr.length - 1, arr);
console.log(arr);
