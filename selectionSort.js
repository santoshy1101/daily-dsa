
let arr= [33,44,5,6,2];

function selectionSort(arr){
    let minId;
    for(let i=0; i<arr.length; i++){

        minId = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j]%2==0){
                minId=j
            }
        }

        let temp = arr[minId];
        arr[minId] = arr[i];
        arr[i] = temp 
    }
}

selectionSort(arr)

console.log(arr)