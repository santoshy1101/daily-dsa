// randomElem.js



// for (let i=0; i<arr.length; i++){
//    id=  setInterval(() => {
//         console.log(arr[i])
//     }, 1000*i);

//     // clearInterval(id)
// }

function printArrayWithDelay(array) {
    let index = 0;
    
    function printElement() {
      console.log(array[index]);
      index = (index + 1) % array.length; // Increment index and wrap around
      console.log(index)
      setTimeout(printElement, 1000); // Print next element after 1 second
    }
    
    printElement();
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  printArrayWithDelay(myArray);