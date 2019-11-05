function findThingsThatAddToNine(numbers, target) {
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length + 1; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return undefined
}

var pair = findThingsThatAddToNine([3, 34, 4, 6, 12, 2], 9)
console.log(pair) //--> [4,5]