/**
 * @topic: 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 * @Date: 2019-07-21
 */

function getUglyNumber_Solution1(index) {
    if (index === 0) {
        return 0;
    }
    let res = [1];
    let two = 0;
    let three = 0;
    let five = 0;
    for (let i = 1;i<index; i++){
        res[i] = Math.min(res[two] *2, res[three] * 3, res[five] * 5);
        if (res[i] === res[two] * 2) {
            two++;
        }
        if (res[i] === res[three] * 3) {
            three++;
        }
        if (res[i] === res[five] * 5) {
            five++;
        }
    }
    return res[index - 1];
}

let value = getUglyNumber_Solution1(0);
console.log(value);

// 时间复杂度太高
function getUglyNumber_Solution(index)
{
    let uglyNumber= [1];
    let num = 2;
    while(uglyNumber.length < index) {
        let middle = num;
        middle = divide(middle, 2);
        if (middle === 1) {
            uglyNumber.push(num);
        } else {
            middle = divide(middle, 3);
            if (middle === 1) {
                uglyNumber.push(num);
            } else {
                middle = divide(middle, 5);
                if (middle === 1) {
                    uglyNumber.push(num);
                }
            }
        }
        num++;
    }
    return uglyNumber[index - 1];
}

function divide(middle, dividend){
    while(middle % dividend === 0){
        middle /= dividend;
    }
    return middle;
}

// let value = getUglyNumber_Solution(1);
// console.log(value);
