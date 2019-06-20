/**
 * @topic: 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * @Date: 2019-06-20
 */

// f(n) = f(n-1) + f(n-2)
function rectCover(number)
{
    const f0 = 0;
    let index = 1;
    let current = 1;
    let prior = 1;
    if (number >= 1) {
        while(index < number){
            current += prior; // 2 3 5 8
            prior = current - prior; // 1 2 3
            index++; // 2 3
        }
        return current;
    } else {
        return f0;
    }
}

let value = rectCover(6);
console.log(value);
