## fetch()

* Use `fetch()` to make a network request to a URL
* Use `.then()` promises to deal with the asynchronous response
* Convert the response to `.json()`
* Interact with the JSON `data` in the second `.then()` promise

```js
fetch('http://api.open-notify.org/astros.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data)
});
```

---
## JSON Responses

* Here's an example of a JSON response. 
* Iterate over the response by accessing the object and using a for loop.

```js
for (let i = 0; i < json.people.length; i++) {
  let person = json.people[i]
}
```

```json
{
    "message": "success",
    "number": 6,
    "people": [
        {
            "craft": "ISS",
            "name": "Christina Koch"
        },
        {
            "craft": "ISS",
            "name": "Alexander Skvortsov"
        },
    ]
}
```

---
## JSON Server

We use a program called `json-server` that reads a `.json` file and responds to
network requests.

```bash
npm install -g json-server
json-server --watch db.json
```

JSON Server expects the file to contain an object with properties of arrays
representing resources. Here the one resource is `movies`.

**db.json**
```json
{
  "movies": [
    {"id": 1, "title": "CITIZEN KANE" , "year": "1941"},
    {"id": 2, "title": "CASABLANCA" , "year": "1942"},
    {"id": 3, "title": "THE GODFATHER" , "year": "1972"},
    {"id": 4, "title": "GONE WITH THE WIND" , "year": "1939"}
  ]
}
```

---
## Appending Items to the Page
```js
let people = document.getElementById('people')
for (let i = 0; i < json.people.length; i++) {
  let person = json.people[i]

  let div = document.createElement('div')
  let name = document.createElement('div')

  name.textContent = person.name
  
  div.appendChild(name)
  people.appendChild(div)
}
```

---
## innerHTML is Evil

* Never, ever, ever use `.innerHTML`.
* Prefer `.textContent` instead.
* Some of our curriculum uses it, but it is wrong.
* Rendering things in `.innerHTML` is a big security flaw.
* `.innerHTML` renders text literally as HTML/CSS/JavaScript, whereas
  `.textContent` renders text as just text.
* Example: attackers can craft malicious user input in a Facebook comment
  that's rendered on someone else's page where the comment has JavaScript
  that redirects the user to a phishing website.

```html
let name = 'Stuart'
let comment = '<script>window.location="http://phish.com"</script>
div.innerHTML = `
  <div>
    Name: ${name}
    Comment: ${comment}
  </div>
`;
```

---
## Asynchronous JavaScript

What order do these console.logs print in?

```html
<script>
console.log('A: script loaded')

document.addEventListener('DOMContentLoaded', () => {
  console.log('B: DOM loaded')

  let button = document.getElementById('button')
  button.addEventListener('click', () => {
    console.log('C: button clicked')
  })

  console.log('D: DOM load done')
})

console.log('E: end of script')
</script>

<button id="button">click</button>
```

---
## Asynchronicity

* **Synchronous** code runs in order from top to bottom one step at a time.
* **Asynchronous** code runs with no guarantee when it will start or finish.

We use asynchronous code when we have to wait for an unknown amount of time.

#### Examples of asynchronous things:
* Making a network request and waiting for a response
* Adding an event listener to an element on the page
* Using `setTimeout` or `setInterval` to create timers for things to occur in the future

---
## Promises
**Promises** are a new concept in JavaScript that appeared in JS 2015. They
deal with asynchronicity.

* `fetch()` returns a promise.
* We interact with promises using `.then()` statements.
* The thing that resolves from one `.then()` statements is passed as a
  parameter to the next `.then()` statement.
* We can chain `.then()` statements on and on together forever.

```js
fetch('http://api.open-notify.org/astros.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.log('Error:', err.message);
});
.finally(function() {
  console.log('OK, everything is done now!');
});
```

---
## The Pyramid of Death

Before Promises JavaScript used to look like this:

```js
function myFunction(inputValue) {
    asyncFunc1('value', (err, a) => {
        if (err) {
            // handle error
        } else {
            asyncFunc2('value', (err, b) => {
                if (err) {
                    // handle error
                } else {
                    try {
                        const c = syncFunc3(b);
                        asyncFunc4('value', (err, d) => {
                            if (err) {
                                // handle error
                            } else {
                                callback(null, d);
                            }
                        });
                    } catch (ex) {
                        // handle error
                    }                    
                }
            });
        }
    });
}
```
