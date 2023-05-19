function permutations(nums) {  // ye wala
    let permutations = [];
    let permutation;
    const helper = (arr, m = []) => {
      if (arr.length === 0) {
        permutation = m;
        permutations.push(permutation);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          helper(curr.slice(), m.concat(next))
       }
     }
   }
   helper(nums);  // array yha pe paas kar rahe hai
   return permutations;
  }

  let nums =[1,2,3]
 let mat =permutations(nums)

 for(let key of mat){
    console.log(key.join(" "))
 }
