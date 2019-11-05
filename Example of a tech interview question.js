/*Example:
``` var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

var sumOfNine = []
var final = []
function findThingsThatAddToNine(integers, target){
  var sumOfNine = []
  for(var i = 0; i < integers.length; i++){
    sumOfNine.push(target - integers[i])
  }
  // console.log(sumOfNine)
  for(var i = 0; i < integers.length; i++){
    if(sumOfNine.includes(integers[i]) === true){
      final.push(integers[i])
    }
  }
return final
}

var pair = findThingsThatAddToNine([3, 34, 4, 12, 5, 2], 9)
console.log(pair) //--> [4,5]