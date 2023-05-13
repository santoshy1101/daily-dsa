
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }
        else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}



let arr = [1,3,4,5,6,7,9,2,3,2];
console.log(mergeSort(arr))
// console.log(arr);