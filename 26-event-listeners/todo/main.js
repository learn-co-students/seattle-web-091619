console.log('running')

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  attachTodoListener()
})

function attachTodoListener() {
  let list = document.getElementById('todo-items')
  let input = document.getElementById('todo-input')

  let form = document.getElementById('todo-form')
  form.addEventListener('submit', ev => {
    ev.preventDefault()

    let text = input.value
    let li = document.createElement('li')
    li.textContent = text
    list.appendChild(li)

    // add a delete button
    let span = document.createElement('span')
    span.textContent = 'X'
    span.addEventListener('click', () => {
      li.remove()
    })

    li.appendChild(span)

    input.value = ''
  })
}