let arr=[4,3,7,1,5];

for(let i=0; i<arr.length; i++){
    // let swapped = false
    console.log(arr);
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            // swapped=true;
        }
       
    }
    // if(!swapped){
    //     break;
    // }
   
}