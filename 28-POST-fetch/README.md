## fetch() POST Requests

* `fetch()` accepts a second `config` parameter 
* We can use the `config` parameter to configure
  * HTTP methods
  * headers
  * add data in the body of the request

```js
fetch('http://myapi.com/data', config)
```

---
## fetch() Configuration

* Use `'method'` to specify if it is a POST/PUT/PATCH/DELETE request
* Use `headers` to tell the server that data is being sent as JSON
* Use `body` to add data to the network request
* Everything in the `body` should be in an object that is ran through
  `JSON.stringify()` so it's formatted correctly.

```js
let config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    city: 'Seattle'
    population: 724745
  })
}
```

Notice in the headers object `'Content-Type'` has quotes and `Accept` does
not. `'Content-Type'` has quotes because it has the hyphen `-`.

---
## All Together

You can either set `config` to a variable, or you can inline the entire thing.

```js
fetch('http://myapi.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    city: 'Seattle'
    population: 724745
  })
});
```
---
## Clearing a List

* Here are two techniques for clearing items out of a list.
* Either remove the items in the list one by one
* Or use `.innerHTML` to obliterate everything the list.
* Really, prefer removing things with the while loop and `.remove()`

```js
function clearList(){
  let list = document.getElementById("dog-breeds");
  while (list.firstChild) {
    list.firstChild.remove()
  }
}
```

```js
function clearList(){
  let list = document.getElementById("dog-breeds");
  list.innerHTML = ''
}
```

* <https://stackoverflow.com/questions/18084941/remove-child-nodes-or-elements-or-set-innerhtml>
* <https://jsperf.com/innerhtml-vs-removechild/67>
