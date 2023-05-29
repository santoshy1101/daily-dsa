const arr=[1,0,2,0,3,8,90,6,0];
let count=0;

for(let i=0; i<arr.length; i++){
    if(arr[i]!=0){ // i==0 // i==2 // i==4 
        arr[count] = arr[i]  // arr[count==0] = arr[i==0]=1 , arr[count===1] = arr[i==2] =2 , arr[count===2] = arr[i==4] =3
        count++;               // count =1          , count==2 ,
    }
}

for(let j=count; j<arr.length; j++){
    arr[j] = 0
}

console.log(arr)