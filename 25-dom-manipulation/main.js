console.log('running main.js')

// wait for the page to have loaded the HTML and hooked it up
// to be ready for manipulation via JavaScript
document.addEventListener('DOMContentLoaded', function() {
  main()
})

function main() {
  displayRandomBackgroundColor();
  displayTimestamp();
  exclaimFood();
  generateFavoriteCities();
}

function displayRandomBackgroundColor() {
  const colors = [
    'red',
    'yellow',
    'green'
  ];

  document.body.style.backgroundColor = sample(colors);
}

function displayTimestamp() {
  let span = document.getElementById('timestamp');
  let now = new Date();

  let hour = now.getHours()
  let minute = zeroPad(now.getMinutes())
  let second = zeroPad(now.getSeconds())

  span.textContent = `${hour}:${minute}:${second}`;
}

function exclaimFood() {
  let lis = document.getElementsByTagName('li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].textContent += '!!!'
  }
}

function generateFavoriteCities() {
  let list = document.getElementById('favorite-cities')
  let cities = ['Seattle', 'Vancouver', 'San Francisco', 'Portland']

  for (let i = 0; i < cities.length; i++) {
    let city = cities[i]
    let li = document.createElement('li')
    li.textContent = city
    list.appendChild(li)
  }
}