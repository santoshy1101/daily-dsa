// variable size sliding window

// Given an array containing N positive integers and an integer K. Your task is to find the length of the longest Sub-Array with sum of the elements equal to the given value K.

// For Input:

// your output is:
// 4 .

function sum() {
  let n = 7
  let k = 5

  let arr = [4, 1, 1, 1, 2, 3, 5]

  let start = 0
  let end = 0
  let max = -Infinity
  let sum = 0

  while (end < n) {
    sum = sum + arr[end]   // sum 4+1+1
    if (sum < k) {           // 5<5
      end++
    } else if (sum === k) {          // 5===5
      if (end - start + 1 > max) {    //2> -1
        max = end - start + 1             // max =2
      }
      end++                             // end 2
    } 
    else if (sum > k) {         // 6>5  2>5
      while (sum > k) {          //6>5  2>5
        sum = sum - arr[start]     // sum 6-4
        start++                   // start 1
      }
      end++
    }
  }
  return max
  
}

console.log(sum())
