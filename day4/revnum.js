

let num=125;
// console.log(num%10)

// for(let i=0; i<String(num).length;i++){
//     let last = num%10
//     console.log(last);

// }
let rev=0

while(num>0){
    let last = num%10; // 5 2
    num = Math.floor(num/10) // 12 1 ;
    rev =rev*10+last

}
console.log(rev);