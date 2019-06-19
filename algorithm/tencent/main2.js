const t = parseInt(readline());
for(let i = 0; i < t; i++) {
    const nums = readline().split('').map(num => parseInt(num));
    process(nums);
}

// process([1,1,2,2,3,3])

function process(nums) {
    let count = 0;
    while(true) {
        if (nums.length < 2) {
            printResult(count % 2 === 0);
            return;
        }
        const index = nums.findIndex((num, index) => num === nums[index + 1])
        if(index === -1) {
            printResult(count % 2 === 0);
            return;
        }
        nums.splice(index, 2);
        count++;
    }
}

function printResult(result) {
    console.log(result ? 'Oh,no.' : 'Yes,you can win!');
}
