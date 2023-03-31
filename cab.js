

const person ={name:"santosh"};

function sayhii(age,fnd){
    return `hey name is ${this.name} and age ${age} my fnd ${fnd}`
}

console.log(sayhii.call(person,21,"rinku"))
console.log(sayhii.apply(person,[221,"rahul"]))
const bin =sayhii.bind(person,21,"nijui")
console.log(bin())
