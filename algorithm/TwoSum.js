var twoSum = function(nums, target) {
    const index = []
    for (let i = 0; i< nums.length - 1; i++) {
        for(let j = i + 1; j< nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                index.push(i)
                index.push(j)
            }
        }
    }
    return index
}


const nums = [1, 8, 88, 7]
const target = 9
twoSum(nums, target)
