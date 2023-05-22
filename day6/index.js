const cartItem =[
    {
        pName:"Tshirt",
        price:200,
        quant:2,
    },
    {
        pName:"jens",
        price:800,
        quant:3,
    },
]

const totalPrice = cartItem.reduce((acc,curr)=>acc+curr.price*curr.quant,0) 
// acc=0, curr = 200*2 + 400, acc==400;
// acc==400, curr = 800*1 = 800+400 = 1200;

console.log(totalPrice)