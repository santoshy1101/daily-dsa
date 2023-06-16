const cart = ["wallet", "mobile", "laptop"];
let wallet =2000;
console.log("walletBalence : ",wallet)
// createOrder , proceedToPayment,
// ShowOrderSummary, updateWallet;

createOrder(cart)
.then(OrderId=>{
    console.log(OrderId)
    return OrderId
})
.then(orderId=>{
    return proceedToPayment(orderId)
})
.then((payment)=>showOrderSummary(payment))
.then(orderSummary=>updateWallet(orderSummary))
.then(res=>console.log(res))


function createOrder(cart){
    return new Promise((resolve,reject)=>{
        // validation
        if(!validation(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        if(cart){
            setTimeout(()=>resolve("12345"),5000)
        }
    }
)}

function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        if(orderId){
            resolve({message:"Your Payment succesfully",orderId,price:1500})
        }
        else{
            reject(new Error("payment Failed"))
        }
    })
}

function showOrderSummary(payment){
    return new Promise(function(resolve,reject){
        if(payment.message.includes("Payment succesfully")){
            resolve({message:"your product has been successfully placed", orderId: payment.orderId ,price:payment.price})
        }
        else{
            reject("payment Failed")
        }
    })
}

function updateWallet(orderSummary){
    return new Promise(function(resolve,reject){
        if(orderSummary){
            resolve({...orderSummary,updatedWalletBalance:wallet-orderSummary.price})
        }
    })
}




function validation(cart){
return true
}