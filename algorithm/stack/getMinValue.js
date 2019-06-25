/**
 * @topic: 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 * @Date: 2019-06-24
 */

let stack = [];

function push(node)
{
    stack.push(node);
}
function pop()
{
    stack.pop();
}
function top()
{
    return stack[stack.length - 1];
}
function min()
{
    return Math.min.apply(null, stack);
}
