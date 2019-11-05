// Time Limit 45 minutes
// Write a function coinFlip that returns at random either 'heads' or 'tails'
// HINT: look into Math.random()

coinFlip() //'heads'
//or
coinFlip() //'tails'

// BONUS: Can you devise a way to investigate if your function produces 'heads' and 'tails' with a roughly 50/50 split?

function coinFlip(){
  if(Math.random() < 0.5){
    return 'Heads'
  }
    else{
    return 'Tails'
    }
  }
function coinCounter(n){
  var heads = 0
  var tails = 0
  for(var i = 0; i <n; i++){
  if(coinFlip() === 'Heads'){
    heads++
  }
    else{
    tails++
    }
}
return ("Heads: " + heads + '\nTails: ' + tails)
}

console.log(coinCounter(500))