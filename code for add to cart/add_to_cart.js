// Initialize an empty cart array
var cart = [];

// Function to add a product to the cart
function addToCart(product) {
  // Check if the product already exists in the cart
  var existingProductIndex = cart.findIndex(item => item.product === product);

  if (existingProductIndex !== -1) {
    // If the product exists, increase the quantity
    cart[existingProductIndex].quantity++;
    console.log('Product quantity increased: ' + product);
  } else {
    // If the product doesn't exist, add it to the cart with a quantity of 1
    cart.push({ product: product, quantity: 1 });
    console.log('Product added to the cart: ' + product);
  }
}

// Example usage
addToCart('Product 1');
addToCart('Product 2');
addToCart('Product 1'); // Adding a duplicate product

// Display the contents of the cart
console.log(cart);
