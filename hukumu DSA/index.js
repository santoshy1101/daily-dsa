
// const [row,col] = [5,5];

// const mat = [
//     [0,0,0,0,0],  
//     [1,1,1,1,1],
//     [2,2,2,2,2],
//     [3,3,3,3,3],
//     [4,4,4,4,4]
// ]

// for(let i=0; i<row; i++){
//     for(let j=i; j<col; j++){
//             let temp = mat[i][j];
//             mat[i][j] = mat[j][i];
//             mat[j][i] = temp;
//     }
//     console.log(mat[i].join(" "))
// }

// revStr;

// let str= "A Transformation in education";
// str=str.split(" ")

// for(let i=str.length-1; i>=0; i--){
//     console.log(str[i])
// }



// split methode
// let arr =[];
// let word="";
// for(let i=0; i<=str.length; i++){
// if(str[i]===" " || i===str.length){
//     arr.push(word)
//     word="";
// }
// else{
//     word+=str[i]
// }
// }
// console.log(arr)
// str=arr
// let i=0;
// let j=str.length-1;

// while(i<j){
//     let temp = str[i]; 
//     str[i] = str[j];
//     str[j] = temp;
//     i++;
//     j--;
// }

// console.log(str)

// distinct subStr char;
// let str = "aaa";
// let count=0;
// let subObj={}
// for(let i=0; i<str.length; i++){
//     let sub=""
//     for(let j=i; j<str.length; j++){
//         sub+=str[j]
//         if(subObj[sub]===undefined){
//             subObj[sub] = 1;
//             count++
//         }
//         else{
//             subObj[sub]++;
//         }
//     }
// }

// console.log(count)

// let str = "abcde";
// let count=0;
// let subArr=[]
// for(let i=0; i<str.length; i++){
//     let sub=""
//     for(let j=i; j<str.length; j++){
//         sub+=str[j]
//         subArr.push(sub)
//     }
// }

// const rem = new Set([...subArr])
// console.log(rem.size)

// const arr =[4,5,-1,2];
// let max=-Infinity;
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<=arr.length; j++){
//         let product = arr.slice(i,j).reduce((acc,curr)=>acc*curr,1);
//         if(product>max){
//             max=product;
//         }
//     }
// }
// console.log(Math.abs(max))

// const arr ="aabba";
// let count=0;
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<=arr.length; j++){
//         let sub = arr.slice(i,j);
//         if(sub.length-sub.replaceAll(arr[i],"").length <3){
//             count++
//         }
        
//     }
// }
// console.log(count)
// let n=5;
// let pro=1;
// for(let i=n; i>0; i--){
//     pro*=i
// }
// console.log(pro)

// function fact(n){
//     if(n==1|| n===0){
//         return 1
//     }
//     return n*fact(n-1)
// }

// console.log(fact(5))

// if in array consicutive 3 even element present print "Yes" else "No" 

const arr = [1,2,4,5,8,7,8,2,12];
// every even element push on even arry
// ye hi question 
// input  check kar lo
// let tc = +input[0];
// let l=1;
// innput check kar lo
// for(let i=0; i<tc; i++){
    // let n= +input[l++];
    // let arr= input[l++].trim().split("").map(Number)
    // console.log(n,arr)
    // const arr = [1,2,3];
    // let even =[]
    // let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0 && arr[i+1]%2===0 && arr[i+2]%2===0){
            // console.log("Yes",arr[i],arr[i+1],arr[i+2])
            return
        }
    
        // else{
        //     even=[]
        // }
    }
     console.log("No") 
// }




// function conRomen(n){

//     let str="";

//     while(n>=1){
//         if(n >=1000){
//             n-=1000;
//             str+="M";
//         }
//         else if(n>=900){
//             n-=900;
//             str+="CM"
//         }
//         else if(n>=500){
//             n-=500;
//             str+="D"
//         }
//         else if(n>=400){
//             n-=400;
//             str+="CD"
//         }
//         else if(n>=100){
//             n-=100;
//             str+="C"
//         }
//         else if(n>=90){
//             n-=90;
//             str+="XC"
//         }
//         else if(n>=50){
//             n-=50;
//             str+="L"
//         }
//         else if(n>=40){
//             n-=40;
//             str+="XL"
//         }
//         else if(n>=10){
//             n-=10;
//             str+="X"
//         }
//         else if(n>=9){
//             n-=9;
//             str+="IX"
//         }
//         else if(n>=5){
//             n-=5;
//             str+="V"
//         }
//         else if(n>=4){
//             n-=4;
//             str+="IV"
//         }
//         else if(n==1){
//             n-=1;
//             str+="I"
//         }

        
        
//     }

//     console.log(str)



// const romenNumber ={
    
//     M:1000,
//     CM:900,
//     D:500,
//     CD:400,
//     C:100,
//     XC:90,
//     L:50,
//     XL:40,
//     X:10,
//     IX:9,
//     V:5,
//     IV:4,
//     I:1,
// }

// for(let key in romenNumber){
//     while(n >= romenNumber[key]){
//         str+=key;
//         n-=romenNumber[key]
//     }
// }

// console.log(str)

// }


// conRomen(2085)


// function logic(n){
//     if(n==0){
//         return 0
//     }
//     if(n<0){
//         return
//     }

//     return  logic(n-3)+logic(n-2)+log(n-1)
// }