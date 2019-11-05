const RANDOM_QUESTION_URL = "http://jservice.io/api/random";

//YOUR CODE HERE

let CURRENT_QUESTION = {};

document.addEventListener("DOMContentLoaded", () => {
  init();
});

// UNHOISTED FUNCTION
// let fetchData = function() {
//   fetch(RANDOM_QUESTION_URL)
//     .then(resp => resp.json())
//     .then(json => console.log(json));
// };

function init() {
  const answerButton = document.getElementById("answer-button");
  const nextButton = document.getElementById("next-button");

  answerButton.addEventListener("click", () => {
    displayTriviaAnswer();
  });
  nextButton.addEventListener("click", () => {
    nextQuestion();
  });
  fetchData();
}

// HOISTED FUNCTION
function fetchData() {
  fetch(RANDOM_QUESTION_URL)
    .then(resp => resp.json())
    .then(json => {
      CURRENT_QUESTION = json[0];
      displayTriviaQuestion();
    });
}

function displayTriviaQuestion() {
  const questionText = document.getElementById("question").querySelector("p");
  const categoryText = document.getElementById("question").querySelector("h5");
  questionText.textContent = CURRENT_QUESTION.question;
  categoryText.textContent = CURRENT_QUESTION.category.title;
}

function displayTriviaAnswer() {
  const answerText = document.getElementById("answer").querySelector("p");
  answerText.textContent = CURRENT_QUESTION.answer;
  document.getElementById("answer").style.display = "block";
}

function nextQuestion() {
  fetchData();
  document.getElementById("answer").style.display = "none";
}


//REVIEW

//GET
//POST
//PUT
//PATCH
//DELETE


// fetch(`url/${id}`, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//     Accepts: "application/json"
//   },
//   body: JSON.stringify({
//     name: "Sarah"
//   })
// })

// {
//   name: "Sarah",
// }
