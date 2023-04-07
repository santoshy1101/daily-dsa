// Given an array and a positive integer k, find the first negative integer for each and every window(contiguous subarray) of size k.

// Example:

// Input:
// 2
// 5
// -8 2 3 -6 10
// 2
// 8
// 12 -1 -7 8 -15 30 16 28
// 3

// Output:
// -8 0 -6 -6
// -1 -1 -7 -15 -15 0 .

// let arr = [-8, 2, 3, -6, 10]
// let k = 2
// let n = 5
// let start = 0
// let end = 0

// let list = []
// let result = []

// while (end < n) {
//   if (arr[end] < 0) {
//     list.push(arr[end]) // list = [-6]
//   }
//   if (end - start + 1 < k) {
//     end++
//   } else if (end - start + 1 === k) {
//     if (list.length === 0) {
//       result.push(0)
//     } else {
//       result.push(list[0]) // //result = [-8,0,-6]
//       if (arr[start] === list[0]) {
//         list.shift() //list =[]
//       }
//     }
//     start++
//     end++ //[-6,10]
//   }
// }

// console.log(result)


let n=8
let arr =[12, -1, -7, 8, -15, 30, 16, 28]
let k=3;
// Output:
// -1 -1 -7 -15 -15 0 .

let start=0;
let end=0;
let list_of_negative=[];
let result=[];

while(end<n){
    if(arr[end]<0){
        list_of_negative.push(arr[end])
    }
    if(end-start+1<k){
        end++
    }
    else if(end-start+1===k){
        if(list_of_negative.length===0){
            result.push(0)
        }else{
            result.push(list_of_negative[0]);
            if(arr[start]===list_of_negative[0]){
                list_of_negative.shift()
            }
        }

        start++;
        end++;
    }
}

console.log(result)