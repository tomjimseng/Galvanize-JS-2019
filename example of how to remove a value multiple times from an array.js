function removeElement(array, discarder) {
  // your code here
  /* START SOLUTION */
  var newArray = []
for(var i = 0; i < array.length; i++){
    if(array[i] !== discarder){
        newArray.push(array[i])
    }
}
return newArray
  /* END SOLUTION */
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

// //this function didnt work
// function removeElement(array, discarder) {
//   // your code here
//   /* START SOLUTION */
// for(var i = 0; i < array.length; i++){
//     if(array[i] === discarder){
//         array.splice(i,1)
//     }
// }
// return array
//   /* END SOLUTION */
