// const sum=(x)=>(y)=>(z)=>(a)=> x+y+z+a;

function sum(a){
    return function(b){
        if(b) return sum(a+b);
        return a
    }
}


console.log(sum(5)(10)(7)())