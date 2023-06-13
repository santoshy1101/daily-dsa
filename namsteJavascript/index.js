// find area of circle
const radius =[2,3,1,4]

const area = function(radius){
return Math.PI * radius *radius
}

const cicumference = function(radius){
return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2 * radius;
}
function cal(radius,logic){
    result =[];
    for(let i=0; i<radius.length; i++){
        result.push(logic(radius[i]))
    }
    return result
}
console.log(cal(radius,diameter))

