let n=12;

let isPrime  = new Array(n+1).fill(true);
console.log(isPrime);

isPrime[0] = false;
isPrime[1] = false;

for(let i=2; i*i<=n; i++){ // i=2 check 2*2 <= 12; i=2+1 3*3<=12

    for(let j=2*i; j<=n; j=j+i){  // j=2*2 check 4 <= 12 , j=4+2  6<12 , j=6+2  8<=12 ; j=8+2; 10<=12 ; j=10+2 12<=12 ; j=12+2; 14<=12 false
        isPrime[j] = false;  // isPrime[4] = false, isPrime[6] =false, isPrime[8]=false ; isPrime[10]=false isPrime[12]=false;
    }
}

for(let i=0; i<isPrime.length;i++){
    console.log(i, isPrime[i])
}