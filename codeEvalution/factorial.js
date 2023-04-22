function factorial(n){
    fac=1;
    for(let i=n; i>0; i--){
        fac*=i
    }
    return fac
}

console.log(factorial(5))