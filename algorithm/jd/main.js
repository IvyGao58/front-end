// 使用JavaScript(Google V8 Engine(6.2.340))语言请注意：作答时不要进行DOM相关操作；
// 读取size个字符：gets(size)
// 将读取至多size个字符，当还未达到size个时如果遇到回车或结束符，会提前结束。回车符可能会包含在返回值中。
// 输出信息：printsth(sth, ...)
// 往控制台输出sth，当有多个参数时，空格分隔；最后不加回车。
// 输出一行：print(sth, ...)
// 往控制台输出sth，当有多个参数时，空格分隔；最后加回车。
// 读取一个（长）整数：readInt()
// 从控制台读取一个（长）整数。
// 读取一个浮点型：readDouble()
// 从控制台读取一个浮点型。
// 读取一行输入：read_line()
// 将读取至多1024个字符，当还未达到1024个时如果遇到回车或结束符，提前结束。回车符可能会包含在返回值中。

// 样例
// 给予两个整数 a 和 b ，计算它们的和 a + b
// var a, b;
// var solveMeFirst = (a,b) => a+b;
// while((a=readInt())!=null && (b=readInt())!=null){
//     let c = solveMeFirst(a, b);
//     print(c);
// }


//拉齐有一个01序列，他可以对这个序列进行任意多次变换，每次变换都是把序列的最后若干个元素放到最前面，
// 例如：010011，将最后3个元素011放到最前面，序列变为011010。所有变换结束后，
// 拉齐需要挑出一个全为1的连续区间，要求最大化区间长度。

// var str = read_line()
function append(str){
    const nums = str.split('').map(num => parseInt(num));
    if (nums.indexOf(1) === -1) {
        console.log(0);
    } else {
        if(nums[0] !== 0 && nums[nums.length - 1] !== 0) {
            let count = 0;
            for(let i = nums.length -1; i>0; i--) {
                if (nums[i] === 1) {
                    count += 1;
                } else {
                    break;
                }
            }
            nums.splice(nums.length - 1 - count);
            for(let i = 0; i< count; i++) {
                nums.unshift(1);
            }
        }
        let records = [];
        let result = 0;
        for(let i = 0; i< nums.length; i++) {
            if(result > 0 && nums[i] === 0){
                records.push(result);
                result = 0;
            }  else {
                if(nums[i] === 1) {
                    result += 1;
                }
            }
        }
        result !== 0 && records.push(result);
        let final = 0;
        records.forEach(item => {
            final < item && (final = item);
        });
        console.log(final);
    }
}


append('100111101111011111');
