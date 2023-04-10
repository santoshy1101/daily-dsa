
function dTos(n,arr){
    if(n===0) return;

    else {
       let digit = n%10;
        n = Math.floor(n/10);
        dTos(n,arr);
        console.log(arr[digit]);
    }
}

let arr= ["zero","one", "two","three","four","five","six","seven","eight","nine","ten"]

dTos(237968794,arr)
// n =234%10 
// console.log(Math.floor(234/100))