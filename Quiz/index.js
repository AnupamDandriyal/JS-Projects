const questions = [{
  question: 'Which is the largest animal in the world?',
  answers: [
    { text: 'Shark', correct: false },
    { text: 'Blue Whale', correct: true },
    { text: 'Elephant', correct: false },
    { text: 'Giraffe', correct: false },
]
},
  {
    question: 'Which is the smallest country in the world?',
    answers: [
      { text: 'Vatican City', correct: true },
      { text: 'Fiji', correct: false },
      { text: 'Mauritius', correct: false },
      { text: 'Barbados', correct: false },
  ]
  },
  {
    question: 'Which is the smallest continent in the world?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Africa', correct: false },
      { text: 'Australia', correct: true },
      { text: 'Europe', correct: false },
  ]
  },
  {
    question: 'Which is the largest desert in the world?',
    answers: [
      { text: 'Sahara', correct: false },
      { text: 'Gobi', correct: true },
      { text: 'Thar', correct: false },
      { text: 'Leh', correct: false },
  ]
  },
]


const questionEl = document.getElementById('question');
const buttonsEl = document.getElementById('answerbtns');
const nextBtnEl = document.querySelector('.nextbtn')

let i = 0;
let score= 0



function startQuiz() {
  i = 0;
  score = 0;
  nextBtnEl.innerHTML = 'Next';
  showQuestion();
}


function showQuestion() {
  resetState();
  let currentqstn = questions[i];
  let qno = i + 1;
  questionEl.innerHTML = `${qno}. ${currentqstn.question}`;

  currentqstn.answers.forEach(answer => {
    const btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerHTML = answer.text;
    buttonsEl.appendChild(btnEl)
    if (answer.correct) {
      btnEl.dataset.correct = answer.correct;
    }
    btnEl.addEventListener('click',selectAnswer)
  })
}

startQuiz()

function selectAnswer(event){
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  }
  else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(buttonsEl.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextBtnEl.style.display = 'block';
}



function handleNextBtn() {
  i++;
  if (i < questions.length) {
    showQuestion();
  }
  else {
    showScore();
  }
}

nextBtnEl.addEventListener('click', () => {
  if (i < questions.length) {
    handleNextBtn();
  }
  else {
    startQuiz();
  }
})


function showScore() {
  resetState();
  questionEl.innerHTML = `You have scored ${score} out of ${questions.El}!`;
  nextBtnEl.innerHTML = 'PlayAgain';
  nextBtnEl.style.display = 'block';

}




function resetState() {
  nextBtnEl.style.display = 'none';
  while (buttonsEl.firstChild) {
    buttonsEl.removeChild(buttonsEl.firstChild)
  }
}




































/* const option = document.querySelector('input[type="checkbox"]');
console.log('hwllo')
option.addEventListener('click', () => {
  if (option.checked) {
    console.log('checked')
  }
})

const slides = ['one', 'two', 'three', 'four', 'five'];
const answers = ['Blue Whale', 'Vatican City', 'Gobi', 'Australia'];
let i = 0;
let count = 0;
const btn = document.querySelectorAll('.btn').forEach((nextbtn) => {
  nextbtn.addEventListener('click', () => {
    answerQuestion();
    changeQuestion();
  })
});

function changeQuestion() {
  if (i === slides.length) {
    location.reload();
  }
  const nextqstn = document.querySelector(`.${slides[i]}`);
  nextqstn.style.display = 'block';
  const prevqstn = document.querySelector(`.${slides[i-1]}`);
  prevqstn.style.display = 'none';
}

function answerQuestion(){
  const input = document.querySelectorAll('input[type="checkbox"]');
  input.forEach((correct) => {
    const label = document.querySelector('label').forEach((labelEl) => {
      if (correct.nextElementSibling === answers[i])
        {
          labelEl.style.backgroundColor = 'green';
          count++;
        }
        else {
          labelEl.style.backgroundColor = 'red';
        }
    })
    
  });
  i++;
  console.lof(count)
}



 */