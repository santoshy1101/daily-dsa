let arr = [1,0,2,3,0,4,5]   // output --> [1,0,0,2,3,0,0];
arr 

let newArr=[]
for(let i=0; i<arr.length; i++){
    newArr.push(arr[i]) 
    arr[i] === 0 && newArr.push(0)

}

for (let i=0; i<arr.length; i++){
    arr[i] = newArr[i]
}
arr