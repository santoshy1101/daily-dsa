
let obj={}
function fib(n){
    if(n===0 ){
        return 0
    }
    if(n===1 ){
        return 1
    }
    if(!obj[n]){
        obj[n]=fib(n-1)+fib(n-2)
    }
    else return obj[n]
}

console.log(fib(25))
console.log(obj)