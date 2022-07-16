//Basketball
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Play Again'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who was the first player in NBA history to be elected league MVP by a unanimous vote ?',
    answers: [
      { text: 'Michael Jordan', correct: false },
      { text: 'Stephen Curry', correct: true },
      { text: 'Lebron James', correct: false },
      { text: 'Kareem Abdul-Jabbar', correct: false }
    ]
  },
  {
    question: 'Who won the 2019 finals MVP award ?',
    answers: [
      { text: 'Klay Thompson', correct: false },
      { text: 'Kevin Durant', correct: false },
      { text: 'Devin Booker', correct: false },
      { text: 'Kawhi Leonard', correct: true }
    ]
  },
  {
    question: 'Which NBA player had the nickname "The Admiral" ? ',
    answers: [
      { text: 'Shaquille Oneal', correct: false },
      { text: 'Charles Barkley', correct: false },
      { text: 'David Robinson', correct: true },
      { text: 'Kobe Bryant', correct: false }
    ]
  },
  {
    question: 'How many championships did Michael Jordan win as a player ?',
    answers: [
      { text: '6', correct: true },
      { text: '8', correct: false },
      { text: '3', correct: false},
      { text: '2', correct: false }
    ]
  },
  {
    question: 'When was Kevin Duarants rookie year ?',
    answers: [
      { text: '2011', correct: false },
      { text: '2007', correct: true },
      { text: '2008', correct: false},
      { text: '2005', correct: false }
    ]
  },

  {
    question: 'Who is the NBA all time leading scorer ?',
    answers: [
      { text: 'Kareem Abdul-Jabbar', correct: true },
      { text: 'Lebron James', correct: false },
      { text: 'Larry Bird', correct: false},
      { text: 'Kobe Bryant', correct: false }
    ]
  },

  {
    question: 'Which NBA player has won the most championships ?',
    answers: [
      { text: 'Magic Johnson', correct: false },
      { text: 'Jerry West', correct: false },
      { text: 'Bill Russel', correct: true},
      { text: 'Lebron James', correct: false }
    ]
  },
  {
    question: 'Which nba team won the 2001 NBA finals ?',
    answers: [
      { text: 'Philadelphia 76ers', correct: false },
      { text: 'Los Angeles Lakers', correct: true},
      { text: 'Orlando Magic', correct: false},
      { text: 'Clevend Cavaliers', correct: false }
    ]
  },
  {
    question: 'How many years did Kobe Bryant play in the NBA ?',
    answers: [
      { text: '15', correct: false },
      { text: '20', correct: true },
      { text: '10', correct: false},
      { text: '19', correct: false }
    ]
  },
  {
    question: 'How many personal fouls does it take to get fouled out of an NBA game ?',
    answers: [
      { text: '5', correct: false },
      { text: '7', correct: false },
      { text: '6', correct: true},
      { text: '8', correct: false }
    ]
  }

]