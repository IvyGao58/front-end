const t = parseInt(readline());

for(let i = 0; i< t; i++) {
    const n = parseInt(readline());
    const nums = readline().split(' ').map(num => parseInt(num));
    process(n, nums);
}

function process(n, nums) {
    let need = n;
    const waitList = [];
    for(let k = 0; k < n; k++) {
        const num = nums[k];
        const readyList = [];
        if(num === need) {
            readyList.push(num);
            need--;
            while(true) {
                const readyIndex = waitList.indexOf(need);
                if(readyIndex !== -1) {
                    waitList.splice(readyIndex, 1);
                    readyList.push(need);
                    need--;
                } else {
                    break;
                }
            }
            print(readyList.join(' '));
        } else {
            print();
            waitList.push(num);
        }
    }
}
