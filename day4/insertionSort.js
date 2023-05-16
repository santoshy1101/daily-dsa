let arr=[8,4,1,5,9,9,4,9,7]; //[8],[4,1,,5,9,2] // [4,8] [1,5,9,2] // [1,4,8] [5,9,2] // [1,4,5,8] [9,2] // [1,4,5,8,9] [2] // [1,2,4,5,8,9]
for(let i=1; i<arr.length; i++){
    console.log(arr);
    let temp =arr[i];
    let j = i-1;
    while(j>=0 && arr[j]>temp) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] =temp;

    
}

