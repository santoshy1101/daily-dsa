

function fact(n){
    if(n===1 || n===0){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}

let f =String(fact(12))
// let count=0;
// for(let i=f.length-1; i>=0; i-- ){
//     if(f[i]==0){
//         count++
//     }
//     else{
//         break
//     }
// }
// let count=0;
// for(let i=5; i<=12; i*=5){
//     count+=12/i
// }
// console.log(Math.floor(count));
