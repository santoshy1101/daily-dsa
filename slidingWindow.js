// Given an array of integers Arr of 
// size N and a number K. Return the
// maximum sum of a subarray of size K.
// Output:
// 700
let check=()=>{
    // console.log(n,k,arr)
     N = 4, K = 2
     Arr = [100, 200, 300, 400]
    let start=0
    let end=0
    let sum=0
//   Input:
let max = -Infinity
while(end<N){
    sum = sum+Arr[end];
    if(end-start+1<K){
        end++
    }
    else if(end-start+1===K){
        if(sum>max){
            max = sum;
            sum = sum-Arr[start];
            start++;
            end++;
        }
        else{
             sum = sum-Arr[start];
            start++;
            end++;
        }
    }
}

console.log(max)


}

check()