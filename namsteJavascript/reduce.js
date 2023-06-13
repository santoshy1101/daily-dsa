const users = [
    { fName : "santosh", age:26 },    
    { fName : "vishal", age:23  },       
    { fName : "rahul", age:30  },       
]

const output = users.reduce((acc,cur)=>{
    if(cur.age < 30 ) {
        acc.push(cur.fName)
    }
    return acc
},[]) 

console.log(output)