const MOVIES_URL = 'http://localhost:3000/movies'
const MOVIES = []

document.addEventListener('DOMContentLoaded', () => {
  main()
})

function main() {
  loadMovies()
  initializeAddMovieForm()
  initializeFilter()
  initializeSorter()
}

function initializeFilter() {
  let clearButton = document.getElementById('clear-filter')
  clearButton.addEventListener('click', () => {
    console.log('clearing')
    filterMovies('') 
  })

  // know when someone pushes the button
  let form = document.getElementById('search-filter-form')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    // get the value of what the person typed in
    let input = document.getElementById('filter-input').value
    filterMovies(input)
  })
}


function filterMovies2(filter) {
  let list = document.getElementById('top-100-movies')
  let movieLis = list.getElementsByTagName('li')
  for (let i = 0; i < movieLis; i++) {
    let li = movieLis[i]
    let title = li.textContent.toLowerCase()
    if (title.includes(filter)) {
      li.classList.remove('hidden')
    } else {
      li.classList.add('hidden')
    }
  }
}

function filterMovies(filter) {
  // make sure the comparison is case-insensitive
  filter = filter.toLowerCase()

  // iterate over the movies that are shown
  clearMovieList()

  // show/hide only movies that match
  for (let i = 0; i < MOVIES.length; i++) {
    let title = MOVIES[i].title.toLowerCase()
    if (title.includes(filter)) {
      addMovie(MOVIES[i])
    }
  }
}

function clearMovieList() {
  let list = document.getElementById('top-100-movies')
  list.innerHTML = ''
}

function initializeSorter() {

}

function initializeAddMovieForm() {
  let form = document.getElementById('add-movie-form')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    console.log('ev', ev)

    let inputs = ev.target.elements
    let title = inputs.title.value
    let year = inputs.year.value
    let movie = {title: title, year: year}

    //addMovie(movie)
    addMovieEvilInnerHTML(movie)
  })
}

function loadMovies() {
  fetch(MOVIES_URL)
  .then(res => res.json())
  .then(json => {
    console.log('movies', json)

    let loading = document.getElementById('loading')
    loading.classList.add('hidden')

    renderMovies(json)
  })
}

function renderMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i]
    addMovie(movie)

    MOVIES.push(movie)
  }
}

function addMovie(movie) {
  let list = document.getElementById('top-100-movies')
  let li = document.createElement('li')

  li.textContent = `(${movie.year}) ` + movie.title
  list.appendChild(li)
}

function addMovieEvilInnerHTML(movie) {
  let list = document.getElementById('top-100-movies')
  list.innerHTML += `
    <li>(${movie.year}) ${movie.title}</li>
  `
}