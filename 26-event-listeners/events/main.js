console.log('running!')

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded')
  attachClickListener()
  initializeMadLibForm()
})

function attachClickListener() {
  console.log('attaching click listener')
  let clicks = 0
  const clicker = document.getElementById('clicker')
  const times = document.getElementById('times')
  
  clicker.addEventListener('click', () => {
    console.log('clicked!')
    clicks++
    times.textContent = '' + clicks
    console.log('clicks', clicks)

    let foo = 99
  })
}

function initializeMadLibForm() {
  // get a reference to the two inputs, and the two display spans
  const personInput = document.getElementById('person-input')
  const verbInput = document.getElementById('verb-input')

  const personDisplay = document.getElementById('person-display')
  const verbDisplay = document.getElementById('verb-display')

  // add a click listener to the button
  const madlibsForm = document.getElementById('madlibs-form')
  madlibsForm.addEventListener('submit', (event) => {
    // prevent the form from going to another page
    // make the browser stay on this page and allow JS to work
    event.preventDefault()

    // get the value of the text the user typed in
    // and set it as textContent
    personDisplay.textContent = personInput.value
    verbDisplay.textContent = verbInput.value
  })
}
