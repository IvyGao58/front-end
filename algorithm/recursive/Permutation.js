/**
 * @topic: 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,
 * 则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 * @Date: 2019-07-17
 */

function Permutation(str)
{
    if (!str) {
        return [];
    }
    // write code here
    let str_arr = str.split("");
    let current = [str_arr[0]];
    let temp = [];
    for (let i = 1; i< str_arr.length; i++) {
        temp = [];
        for (let j = 0; j < current.length; j++) {
            let target = current[j].split("");
            let target_add = current[j].split("");
            for (let n = 0; n < target.length; n++) {
                target_add.splice(n, 0, str_arr[i]);
                temp.push(target_add.join(''));
                target_add.splice(n,1);
            }
            target_add.push(str_arr[i]);
            temp.push(target_add.join(''));
        }
        current = temp;
    }
    let unique_arr = Array.from(new Set(current));
    unique_arr.sort();
    return unique_arr;
}

let value = Permutation('');
console.log(value);
