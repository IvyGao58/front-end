/*假定一种编码的编码范围是a ~ y的25个字母，从1位到4位的编码，如果我们把该编码按字典序排序，
形成一个数组如下： a, aa, aaa, aaaa, aaab, aaac, … …, b, ba, baa, baaa, baab,
baac … …, yyyw, yyyx, yyyy 其中a的Index为0，aa的Index为1，aaa的Index为2，
以此类推。 编写一个函数，输入是任意一个编码，输出这个编码对应的Index.*/

/*input: 输入一个待编码的字符串,字符串长度小于等于100.
output: 输出这个编码的index
input example: baca
output example: 16331*/

// 思路：不穷举，因为是按序的，所以需要找到规律，发现n个字符前有多少个字符

function encode(num) {
    var strs = num.split('');
    var res = strs.map(function(item, index) {
        // 判断当前字符前有多少个字符，以计算一共要重复计算多少组合情况。
        const count = item.charCodeAt() - 'a'.charCodeAt();
        if(index === 0) {
            return count * (Math.pow(25, 3) + Math.pow(25, 2) + 25 + 1);
        } else if (index === 1) {
            return count * (Math.pow(25, 2) + 25 + 1);
        } else if (index === 2) {
            return count * (25 + 1);
        } else {
            return count + 1;
        }
    });
    return res.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })
}

encode('baca');
