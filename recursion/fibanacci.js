
let obj={}
function fib(n){
    if(n===0 ){
        return 0
    }
    if(n===1 ){
        return 1
    }
    if(!obj[n]){
        obj[n]=fib(n-1) + fib(n-2)
    }
     return obj[n]
}

const t1 = performance.now()

const r = fib(999)
console.log(r)
// r 

const t2 = performance.now()
const time = t2 - t1
console.log(time)


console.log("object",obj)