/*different versions of microsfot office is a string
compare versions, which one is newest release
strings one says 9 other is 10
which outcome is newer*/

function newestVersion(str,str2){
  var newArr = str.split('.')
  var newArr2 = str2.split('.')
  var ver = Number.parseInt(newArr[1])
  var ver2 = Number.parseInt(newArr2[1])

  if(ver > ver2){
    return str
  }
  else
  return str2

}


var test = newestVersion('9.35','9.27')
console.log(test)