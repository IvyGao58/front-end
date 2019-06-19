function BubbleSort(nums){
    for(let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(j, j + 1);
            }
        }
    }
    console.log(nums)
}

function swap(i, j) {
    let temp;
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const nums = [5,8,6,3,9];
BubbleSort(nums);

