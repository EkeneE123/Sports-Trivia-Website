//Soccer

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
    question: 'What is the record for red cards given in a single soccer game ?',
    answers: [
      { text: '24', correct: false },
      { text: '36', correct: true },
      { text: '32', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    question: 'What was the largest margin of victory in an international soccer match ?',
    answers: [
      { text: '17', correct: false },
      { text: '11', correct: false },
      { text: '21', correct: false },
      { text: '31', correct: true }
    ]
  },
  {
    question: 'What other team competes against Real Madrid in “The Classic” ?',
    answers: [
      { text: 'FC Dallas', correct: false },
      { text: 'Manchester United F.C.', correct: false },
      { text: 'Chelsea F.C.', correct: false },
      { text: 'Barcelona', correct: true }
    ]
  },
  {
    question: 'Which team won the 1994 FIFA World Cup ?',
    answers: [
      { text: 'United States mens national soccer team', correct:false},
      { text: 'Brazil national football team', correct: true},
      { text: 'England national football team', correct: false},
      { text: 'Italy national football team', correct: false }
    ]
  },
  {
    question: 'Who kicked the longest goal in soccer history ?',
    answers: [
      { text: 'Pelé', correct: false },
      { text: 'Cristiano Ronaldo', correct: false },
      { text: 'Asmir Begovic', correct: true},
      { text: 'Lionel Messi', correct: false }
    ]
  },

  {
    question: 'Who is the only soccer player in history to win five FIFA Ballons d’Or ?',
    answers: [
      { text: 'Jadon Sancho', correct: false },
      { text: 'Eden Hazard', correct: false },
      { text: 'Lionel Messi', correct: true},
      { text: 'Diego Maradona', correct: false }
    ]
  },

  {
    question: ' Who scored the fastest goal in MLS Cup history ?',
    answers: [
      { text: 'Gareth Bale', correct: false },
      { text: 'Diego Valeri', correct: true },
      { text: 'Paul Pogba', correct: false},
      { text: 'Tyler Adams', correct: false }
    ]
  },
  {
    question: 'The FIFA organizes what events for both men and women every four years ?',
    answers: [
      { text: 'World Cups', correct: true },
      { text: 'Olympics', correct: false},
      { text: 'Super Bowl', correct: false},
      { text: 'Finals', correct: false }
    ]
  },
  {
    question: 'Who is the Champions League’s top goalscorer of all time ?',
    answers: [
      { text: 'George Best', correct: false },
      { text: 'Neymar', correct: false },
      { text: 'Zinedine Zidane', correct: false},
      { text: 'Cristiano Ronaldo', correct: true}
    ]
  },
  {
    question: 'What color jerseys did the United States have the Women’s National team wear in 2007 ?',
    answers: [
      { text: 'Black', correct: false },
      { text: 'Gold', correct: true },
      { text: 'Red', correct: false},
      { text: 'White', correct: false }
    ]
  }

]