// pass
let stack1 = [];
let stack2 = [];
function push(node)
{
    stack1.push(node);
}
function pop()
{
    if(stack2.length === 0) {
        while(stack1.length > 0) {
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}

push(3);
push(2);
push(1);
console.log(pop());
