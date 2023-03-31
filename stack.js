
// using stack push pop operation

let stack=[];
stackCurrentSize = stack.length;

maxStackSize=5;

function push(val){
    if(stackCurrentSize>=maxStackSize){
        console.log("U are try to cross stack limit")
    }
    else{
        stack[stackCurrentSize]=val;
        stackCurrentSize+=1;
    }

}

function pop(){
    if(stackCurrentSize>0){
        stackCurrentSize-=1
        stack.length=stackCurrentSize
    }
    else{
        console.log("stack is already empty")
    }
}


push(220);
push(30);
push(50);
push(30);
push(30);

pop();
pop()
pop();
pop()
pop();
pop()
pop()
pop()
pop()





console.log(stack)