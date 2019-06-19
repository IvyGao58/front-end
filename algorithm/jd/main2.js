// 已知一个奇怪的队列，这个队列中有n个数，初始状态时，顺序是1,2,3,4,…n，是1-n按顺序排列。
// 这个队列只支持一种操作，就是把队列中的第i号元素提前到队首(1<i<=n)。
// 如有4个元素，初始为1，2，3，4,可以将3提前到队首，得到3，1，2，4 。
// 现在给出一个经过若干次操作之后的序列，请你找出这个序列至少是由原序列操作了多少次得到的。

// var number = readInt();
// var nums = read_line();
// reShape(nums);

function reShape(nums) {
    let count = 0;
    let remenber = [];
    for(let i = 0; i < nums.length; i++) {
        if(remenber.length > 0 && remenber.indexOf(nums[i]) !== -1) {
            break;
        }
        for(let j = i+1; j< nums.length; j++) {
            if(nums[j] < nums[i]) {
                remenber.push(nums[i]);
                insert(nums[i], nums);
                count += 1;
                break;
            }
        }
    }
    nums.splice(0, count);
    for(let m = 0; m<nums.length -1; m++) {
        if(nums[i]+1 !== nums[i+1]) {
            count += reShape(nums);
        }
    }
    console.log(count);
}

function insert(item, nums){
    for(let i = 0; i<nums.length; i++) {
        if(nums[i]+1 === item) {
            if(i === nums.length -1) {
                nums.splice(i+1, 0, item);
            } else {
                if(item < nums[i+1]) {
                    nums.splice(i+1, 0, item);
                }
            }
        }
    }
}

var nums = [ 5, 2, 1, 4, 3];
reShape(nums);
