var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element){
  var newarray = new Array()
  newarray.unshift("element")
  return newarray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift("element")
  return array
}

