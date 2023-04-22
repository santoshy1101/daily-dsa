function fibonacci(n){
    const fib = [0,1]
    for(let i=2; i<n;i++){
        fib[i] = fib[i-2] + fib[i-1] // i=2 = 0+1, i=3 =1+1 ,i=4=1+2 , i=5=3+2,  i=6=5+3
    }

    return fib
}

console.log(fibonacci(7)) // [0,1]
fibonacci(3) // [0,1,1]
fibonacci(7) // [0,1,1,2,3,5,8]
