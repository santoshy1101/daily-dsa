
function revNumber(n){
    if(n===0){  // base condition
        return
    }
    else{
        revNumber(n-1)  // relation
        console.log(n)   // processing
       
    }
}

revNumber(5)