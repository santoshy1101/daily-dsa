// const products = [
//     {prId:1, prN:"laptop", price:200},
//     {prId:2, prN:"mobile", price:1200},
//     {prId:3, prN:"cover", price:900},
//     {prId:4, prN:"boll", price:2000},
// ]

// const LowToHigh=products.slice(0).sort((a,b)=>a.price-b.price);



// console.log(LowToHigh)

let data=[
    {
      "id": 1,
      "name": "Watch 1",
      "image": "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "category": "Analog"
    },
    {
      "id": 2,
      "name": "Watch 2",
      "image": "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800",
      "category": "Chronograph"
    },
    {
      "id": 3,
      "name": "Watch 3",
      "image": "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "category": "Analog"
    },
    {
      "id": 4,
      "name": "Watch 4",
      "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
      "category": "Digital"
    },
    {
      "id": 5,
      "name": "Watch 5",
      "image": "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=800",
      "category": "Chronograph"
    },
    {
      "id": 6,
      "name": "Watch 6",
      "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "category": "Digital"
    },
    {
      "id": 7,
      "name": "Watch 7",
      "image": "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMGdhbGF4eSUyMHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "category": "Digital"
    },
    {
      "id": 8,
      "name": "Watch 8",
      "image": "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZyUyMGdhbGF4eSUyMHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "category": "Digital"
    },
    {
      "id": 9,
      "name": "Watch 9",
      "image": "https://images.unsplash.com/photo-1648941902569-0132563ee5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      "category": "Digital"
    },
    {
      "id": 10,
      "name": "Watch 10",
      "image": "https://images.unsplash.com/photo-1610689057803-1b1fe41f2dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      "category": "Chronograph"
    },
    {
      "id": 11,
      "name": "Watch 11",
      "image": "https://images.unsplash.com/photo-1548171838-b3d4c18a3a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "category": "Chronograph"
    },
    {
      "id": 12,
      "name": "Watch 12",
      "image": "https://images.unsplash.com/photo-1618151443723-e2c62836c7fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "category": "Analog"
    },
    {
      "id": 13,
      "name": "Watch 13",
      "image": "https://images.unsplash.com/photo-1619976396248-56d05beb2919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      "category": "Analog"
    },
    {
      "id": 14,
      "name": "Watch 14",
      "image": "https://images.unsplash.com/photo-1611353384046-8a02bac0f14d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNocm9ub2dyYXBoJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "category": "Chronograph"
    },
    {
      "id": 15,
      "name": "Watch 15",
      "image": "https://images.unsplash.com/photo-1658824026082-ceaa221148ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGFuYWxvZyUyMHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "category": "Analog"
    }
  ]

 let newData= data.map((ele)=>{
    return {...ele,price:Math.floor(Math.random() * 100)+1}
  })

  console.log(newData)