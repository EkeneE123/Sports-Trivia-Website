//Football
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
    question: 'What city did the Redskins play in before they moved to Washington ?',
    answers: [
      { text: 'Cincinnati', correct: false },
      { text: 'Cleveland', correct: false },
      { text: 'Boston', correct: true },
      { text: 'Miami', correct: false }
    ]
  },
  {
    question: 'Which undefeated team did The Miami Dolphins beat to keep their “undefeated season” in 1985 intact ?',
    answers: [
      { text: 'New England Patriots', correct: false },
      { text: 'Seattle Seahawks', correct: false },
      { text: 'Cleveland Browns', correct: false },
      { text: 'Chicago Bears', correct: true }
    ]
  },
  {
    question: 'Which team won the first Super Bowl in 1967 ?',
    answers: [
      { text: 'Atlanta Falcons', correct: false },
      { text: 'Green Bay Packers', correct: true },
      { text: 'Minnesota Vikings', correct: false },
      { text: 'Carolina Panthers', correct: false }
    ]
  },
  {
    question: 'Which team has the most Super Bowl appearances ?',
    answers: [
      { text: 'Gren Bay Packers', correct: false },
      { text: 'Las Vegas Raiders', correct: false },
      { text: 'New England Patriots', correct: true},
      { text: 'Kansas City Chiefs', correct: false }
    ]
  },
  {
    question: 'Which NFL team did Dan Marino play for as a quarterback ?',
    answers: [
      { text: 'San Fransico 49ers', correct: false },
      { text: 'Miami Dolphins', correct: true },
      { text: 'Baltimore Ravens', correct: false},
      { text: 'Detroit Lions', correct: false }
    ]
  },

  {
    question: 'Which city did the Detroit Lions originally play in ?',
    answers: [
      { text: 'Portsmouth, Ohio', correct: true },
      { text: 'Chicago, Illinois', correct: false },
      { text: 'Trenton, New Jersey', correct: false},
      { text: 'Brooklyn, New York', correct: false }
    ]
  },

  {
    question: 'Who is known as "The Refrigrator" ?',
    answers: [
      { text: 'Tom Brady', correct: false },
      { text: 'Shannon Sharpe', correct: false },
      { text: 'William Perry', correct: true},
      { text: 'Lamar Jackson', correct: false }
    ]
  },
  {
    question: 'Which team was given the nickname “America’s Team” in the 1979 NFL season ?',
    answers: [
      { text: 'Pittsburgh Steelers', correct: false },
      { text: 'Dallas Cowboys', correct: true},
      { text: 'New York Jets', correct: false},
      { text: 'Houston Texans', correct: false }
    ]
  },
  {
    question: 'Which team has lost at least four Super Bowls ?',
    answers: [
      { text: 'Jacksonville Jaguars', correct: false },
      { text: 'Houston Texans', correct: false},
      { text: 'Denver Broncos', correct: true},
      { text: 'Los Angeles Rams', correct: false }
    ]
  },
  {
    question: 'Which team did Tom Brady play for in 2021 ?',
    answers: [
      { text: 'New England Patriots', correct: false },
      { text: 'Tampa Bay Buccaneers', correct: true },
      { text: 'Denver Broncos', correct: false},
      { text: 'Dallas Cowboys', correct: false }
    ]
  }

]