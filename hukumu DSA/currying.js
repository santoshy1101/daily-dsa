

// function getItem(a){
//     // let friut = "Apple"
//     return(b)=>{
//         return (c)=>{
//             console.log(a,b,c,friut)
//         }
//     }
// }

// const getItem = (a) =>(b)=>(c)=>{
//     console.log(a,b,c)
// }

// getItem(4)(3)(2)
// let x=5;
// function foo(){
//     console.log(x)
// }

// foo();

// let x=10;


let arr =[9,5,7,1,2]
// for(let i=0; i<arr.length-1; i++){
//     console.log(arr)
let swapped;
do{
    swapped=false;
    console.log(arr)
    for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];;
            arr[j+1] = temp;
            swapped=true;
        }
    }
}while(swapped)
// }
console.log(arr)