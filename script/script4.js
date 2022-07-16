//Baseball

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
    question: 'What year was the MLB formed ?',
    answers: [
      { text: '1990', correct: false },
      { text: '1856', correct: false },
      { text: '1869', correct: true },
      { text: '1902', correct: false }
    ]
  },
  {
    question: 'Who was the first major league player to hit a home run ?',
    answers: [
      { text: 'Mike Griffin', correct: true },
      { text: 'Babe Ruth', correct: false },
      { text: 'Ted Williams', correct: false },
      { text: 'Joe DiMaggio', correct: false }
    ]
  },
  {
    question: 'How many grand slams did Derek Jeter hit in his career ?',
    answers: [
      { text: '3', correct: false },
      { text: '1', correct: true},
      { text: '5', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'Where is the National Baseball Hall of Fame located ?',
    answers: [
      { text: 'Washington DC', correct: false },
      { text: 'Bronx, New York', correct: false },
      { text: 'Trenton, New Jersey', correct: false},
      { text: 'Cooperstown, New York', correct: true }
    ]
  },
  {
    question: 'Who holds the record for the most MVP awards ?',
    answers: [
      { text: 'Derek Jeter', correct: false },
      { text: 'Jackie Robinson', correct: false },
      { text: 'Barry Bonds', correct: true},
      { text: 'Mickey Mantle', correct: false }
    ]
  },

  {
    question: 'When was the first World Series in baseball ?',
    answers: [
      { text: '1890', correct: false },
      { text: '1903', correct: true },
      { text: '1920', correct: false},
      { text: '1899', correct: false }
    ]
  },

  {
    question: 'What is the maximum number of innings that a baseball game is allowed to be played ?',
    answers: [
      { text: '23', correct: false },
      { text: '20', correct: false },
      { text: '30', correct: false},
      { text: '26', correct: true }
    ]
  },
  {
    question: 'What was The Boston Braves original name ?',
    answers: [
      { text: 'The Boston Bees', correct: true },
      { text: 'The Boston Bungies', correct: false},
      { text: 'The Boston Warriors', correct: false},
      { text: 'The Boston Hammers', correct: false }
    ]
  },
  {
    question: 'Which team won the 2019 World Series ?',
    answers: [
      { text: 'Chicago Cubs', correct: false },
      { text: 'New York Yankees', correct: false },
      { text: 'Washington Nationals', correct: true},
      { text: 'Los Angeles Dodgers', correct: false }
    ]
  },
  {
    question: 'Which team has the most World Series wins ?',
    answers: [
      { text: 'New York Mets', correct: false },
      { text: 'New York Yankees', correct: true },
      { text: 'Atlanta Braves', correct: false},
      { text: 'Boston Red Sox', correct: false }
    ]
  }

]