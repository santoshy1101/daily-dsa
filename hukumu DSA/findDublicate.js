const arr = [1,2,3,5,2,3,4,5,9,1,2,8,9];
const hashmap = {}
arr.forEach((it)=>it in hashmap ? hashmap[it] +=1 : hashmap[it]=1);

console.log(hashmap);
// for (let key in hashmap){
//     if(hashmap[key]>1) console.log(key)
// }