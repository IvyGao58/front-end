/**
 * @topic: 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
 * 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 * @Date: 2019-08-03
 */

function multiply(array)
{
    if(!array || array.length === 0) {
        return null;
    }
    let B = [];
    for (let i = 0; i<array.length; i++) {
        let target = 1;
        array.forEach((item, index) => {
            if (index !== i) {
                target *= item;
            }
        });
        B.push(target);
    }
    return B;
}

let value = multiply([1,3,4]);
console.log(value);
