
// John is at a toy store help him pick maximum number of toys. He can only select in a continuous manner and he can select only two types of toys.


// Example:
// Input:
// 1
let toys="abaccab";
let k=2;

let start=0,end=0;

let obj={};
let max=0
while(end<toys.length){
    console.log(obj)
    obj[toys[end]] ?  obj[toys[end]]++ :  obj[toys[end]]=1;
    if(Object.keys(obj).length<2){
        obj[toys[end]]++
        end++
    }
    else if(Object.keys(obj).length===2){
        if(end-start+1>max){
            max=end-start+1
        }
        end++
    }

    else if(Object.keys(obj).length>2){
        while(Object.keys(obj).length>2){
            obj[toys[start]]--;
            obj[toys[start]]===0 && delete obj[toys[start]];
            start++
            
        }

        end++
    }
}

console.log(max)