let arr = [1,3,4,5,6,7,9,2];

let l =0;
let r =arr.length-1;

function mergeSort(arr,l,r){
    if(l<r){
        let mid = (l+r)/2
    mergeSort(arr,l,mid);
    mergeSort(arr,mid+1,r);
    merge(arr,l,mid,r)
    }
}

function merge(a,l,mid,r){
    console.log(a,l,mid,r)
    let i = l;
    let j = mid+1;
    let k=l;
    let tempArr=[]
    while(i<=mid && j<=r ){
        if(a[i]<a[j]){
            tempArr[k]=a[i];
             i++
        }
        else{
            tempArr[k]=a[j];
            j++
        }
        k++;
    }
    if(i>mid){
        while(j<=r){
            tempArr[k]=a[j];
            k++; j++
        }
    }else{
        while(i<=mid){
            tempArr[k]=a[i];
            k++; i++
        }
    }
    for (let k=l; k<=r;k++){
        arr[k] = tempArr[k]
    }
}

mergeSort(arr,l,r)
// console.log(arr);