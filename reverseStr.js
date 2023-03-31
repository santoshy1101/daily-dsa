

let stack=[]
let currrentValue=stack.length;
let max=5;

function push(val){
    if(currrentValue>=max){
        console.log("stack full")
    }else{

        stack[currrentValue]=val;
        currrentValue+=1;
    }
}

function pop(){
    if(currrentValue>0){
        let removedItem = stack[currrentValue-1]
        currrentValue-=1;
        stack.length=currrentValue;
        return removedItem
        
    }else{
        console.log("stack is empty")
    }
}

function revStr(arr){
    for(let key of arr){
        push(key)
    }
    for(let i=0; i<arr.length; i++){
       arr[i] = pop()
    }
}

// push(23)
// push(33)
// push(83)

// pop()
// pop()
// pop()

let str="rahul";
str=str.split("")
 
revStr(str);
str=str.join("")


console.log("Stack",stack)
console.log(str)