

//  function revWord(){
//     let str = "Santosh bhai kese ho";
//     str = str.split(" ")
//     let result = []
//     for(let i=0; i<str.length; i++){
//         result.push(str[i].split("").reverse().join(""))
//     }
//     return result.join(" ")

// }


 function revWord(str="Santosh bhai kese ho"){
 let result = str.split(" ").map((ele)=>{
       return ele.split("").reverse().join("")
    })
    console.log(result.join(" "))

}

let ans = revWord();
