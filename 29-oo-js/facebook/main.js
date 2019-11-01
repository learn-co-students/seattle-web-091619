const POSTS_URL  = 'http://localhost:3000/posts'

// wait for DOM load
// use fetch() to get the data
// get a reference to our elements
// iterate through the data and create new DOM elements
// add new DOM elements to the page
// build a function to increase likes

document.addEventListener('DOMContentLoaded', () => {
  loadComments()
  initializePostForm()
})

function initializePostForm() {
  let form = document.getElementById('submit-post')
  form.addEventListener('submit', ev => {
    ev.preventDefault()

    let text = ev.target.elements.post.value
    fetch(POSTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        content: text,
        likes: 0,
        comments: []
      })
    })
    .then(res => res.json())
    .then(post => {
      let postElement = createPost(post)
      let postsContainer = document.getElementById('posts')
      postsContainer.prepend(postElement)
    })
  })
}

function loadComments() {
  fetch(POSTS_URL)
  .then(res => res.json())
  .then(posts => displayPosts(posts))
}

function displayPosts(posts) {
  let postsContainer = document.getElementById('posts')
  posts.forEach(post => {
    let el = createPost(post)
    postsContainer.append(el)
  })
}

// <div class="post">
//   <div class="content"></div>
//   <div class="likes"></div>
//   <div class="comments"></div>
// </div>
function createPost(post) {
  let postDiv = document.createElement('div')
  let content = document.createElement('div')
  let likes = document.createElement('div')
  let comments = document.createElement('div')

  let editButton = document.createElement('button')
  editButton.textContent = 'Edit'
  editButton.addEventListener('click', () => {
    let form = document.createElement('form')
    let input = document.createElement('input')
    let save = document.createElement('input')
    let cancel = document.createElement('button')

    input.type = 'text'
    input.name = 'content'
    input.value = post.content

    save.type = 'submit'
    save.value = 'Save'
    cancel.textContent = 'Cancel'

    form.addEventListener('submit', (ev) => {
      ev.preventDefault()

      post.content = input.value
      fetch(POSTS_URL + '/' + post.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(post)
      })

      form.remove()
      content.textContent = post.content
      content.classList.remove('hidden')
    })

    cancel.addEventListener('click', () => {
      form.remove()
      content.classList.remove('hidden')
    })

    form.append(input, save, cancel)
    postDiv.prepend(form)
    content.classList.add('hidden')
  })

  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', () => {
    fetch(POSTS_URL + '/' + post.id, {
      method: 'DELETE',
    })

    postDiv.remove()
  })

  postDiv.classList.add('post')
  content.classList.add('content')
  likes.classList.add('likes')
  comments.classList.add('comments')

  content.textContent = post.content
  likes.textContent = post.likes

  post.comments.forEach(text => {
    let comment = document.createElement('div')
    comment.textContent = text
    comments.append(comment)
  })

  postDiv.append(content, likes, comments, editButton, deleteButton)
  return postDiv
}