console.log('running util.js')

// returns a random element from an array
function sample(array) {
  // pick a random number
  // use that number as an index into the array
  // resolve to a color to set as the background
  let index = Math.floor(Math.random() * array.length);
  let choice = array[index];
  return choice
}

// adds a zero in front of any single-digit number
function zeroPad(number) {
  if (number < 10) {
    return '0' + number
  }
  return number
}
