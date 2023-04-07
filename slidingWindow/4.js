
// Example:
// Input:
let s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring


let start=0,end=0;
let obj={};
let max=-Infinity;

while(end<s.length){
    obj[s[end]] ? obj[s[end]]++ : obj[s[end]]=1;
    
    if(Object.keys(obj).length===end-start+1){
        console.log(obj)
        if(end-start+1>max){
            max=end-start+1;
        }
        end++
    }

    else if(Object.keys(obj).length<end-start+1){
        while(Object.keys(obj).length<end-start+1){
            obj[s[start]]--
            obj[s[start]]===0 && delete obj[s[start]]
            start++
        }
        end++
    }
}

console.log(max)