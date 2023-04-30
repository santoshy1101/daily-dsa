let arr=[4,1,9,2,3,6]


for(let i=0; i<arr.length-1; i++){
    // min value from arr[i] to arr[arr.length-1] swaped arr[i]
    let min=i
    for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    if(min!=i){
        temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
    
}
// console.log(arr);