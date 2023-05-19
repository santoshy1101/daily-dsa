let hashmap = {}
// function fib(n){
//     if(n==1 || n===2){
//         return 1
//     }
//     if(!hashmap[n]){
//         hashmap[n] = fib(n-2) + fib(n-1)
//     }

//     return hashmap[n]

// }

function stairs(n) {
  if (n === 0) {
    return 1
  }
  if (n < 0) {
    return 0
  }

  if(!hashmap[n]){
    hashmap[n] = stairs(n-3) + stairs(n-2) + stairs(n-1) 
  }

  return hashmap[n]
}

const t1 = performance.now()

const r = stairs(5)
// r

const t2 = performance.now()
const time = t2 - t1
// console.log(time)
