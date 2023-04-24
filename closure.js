// example code
function toggler(x,y,z) {
    let count =1;
  return function(){
    if(count==1){
        console.log(x)
        count++;
    }
   else if(count==2){
        console.log(y)
        count++;
    }
    else if(count==3){
        console.log(z)
        count++;
    }
    else{
        console.log("Maximum call exceed")
    }
  }

    
}

const toggle = toggler(1,2,3)

toggle()
// 1
toggle()
// 2
toggle()
// 3
toggle()