let arr=[4,6,2,5,7,9,1,3];

function swap(a,i,j){
   let temp = a[i];
   a[i] = a[j];
   a[j] = temp;
   return a 
}

function partion(l,h){
    let pivot = arr[l];
    let i=l;
    let j=h
    while(i<j){
        while(arr[i]<=pivot) i++
        while(arr[j]>pivot) j--;
        if(i<j){
            swap(arr,i,j)
        }

        swap(arr,j,l)
    } 
    return j
}
let l=0;
    let h = arr.length-1
function quickSort(l,h){
    if(l<h){
    let pivot = partion(l,h);
    quickSort(l,pivot-1);
    quickSort(pivot+1,h);
    }

}

quickSort(l,h)
console.log(arr);
