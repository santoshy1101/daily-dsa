
// reverse string using class

class Stack{
    arr=[];
    currentSize;
    max;

    constructor(){
        this.max=5;
        this.currentSize=this.arr.length;

    }

    push(val){
        if(this.currentSize>=this.max){
            console.log("stack is full");
        }else{
            this.arr[this.currentSize]=val;
            this.currentSize++;
        }
    }
    pop(){
        if(this.currentSize>0){
            this.lastItem = this.arr[this.currentSize-1]
            this.currentSize--;
            this.arr.length=this.currentSize;
            return this.lastItem
        }
        else{
            console.log("stack is already empty")
        }
        

    }
    display(){
        console.log(this.arr);
    }

    reverse(str){
        for(let key of str){
            this.push(key)
        }

        for(let i=0; i<str.length; i++){
            str[i] = this.pop()
        }
    }
}

const st1 = new Stack()
// st1.push(22);
// st1.display();

let str = "ajeet";
str = str.split("")
st1.reverse(str)
// console.log(str)
st1.display();
console.log(str)

// st1.pop()