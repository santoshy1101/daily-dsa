
// Given a string you need to print the size of the longest possible substring that has exactly k unique characters.


// Example:
// Input:
// 2
let str ="aabacbebebe"
let k=3
// aaaa
// 1
// Output:
// 7
// 4 . 

let start,end;

start=0;
end=0;
let obj={};


let max=-Infinity;

while(end<str.length){
    obj[str[end]] ? obj[str[end]]++ : obj[str[end]] = 1;
    if(Object.keys(obj).length<k){
        end++
    }
   else if(Object.keys(obj).length===k){
    if(end-start+1>max){
        max=end-start+1
    }
    end++
    }

    else if(Object.keys(obj).length>k){
        while(Object.keys(obj).length>k){
            obj[str[start]] && obj[str[start]]--
            obj[str[start]]===0 && delete obj[str[start]];
            start++

        }
        end++
    }
}

console.log(max)