 /*
    document.body.appendChild(element)
    element.appendChild(another element)
    */

 let startButton = document.getElementById("start-btn");
 let nextButton = document.getElementById("next-btn");
 let prevButton = document.getElementById("prev-btn");
 let questionContainerElement = document.getElementById("quiz-container");
 let questionElement = document.getElementById("question");
 let answersContainer = document.getElementById("answersContainer");
 let shuffledQuestions, currentQuestionIndex;

 startButton.addEventListener("click", startQuiz);
 nextButton.addEventListener("click", () => {
   currentQuestionIndex++;
   setNextQuestion();
   //     setPrevQuestion();
 });


 function startQuiz() {
   startButton.classList.add("hide");
   shuffledQuestions = questions.sort(() => Math.random() - 0.6);
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove("hide");
   setNextQuestion();
   //   setPrevQuestion();
 }


 function setNextQuestion() {
   resetState();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
 }


 function showQuestion(question) {
   questionElement.innerText = question.question;
   question.answers.forEach((answer) => {

     //    Defining Variables to creat HTML Eelements
     let quizSelect = document.createElement("div");
     let quizMaskRight = document.createElement("div");
     let quizMaskLeft = document.createElement("div");
     let quizTitle = document.createElement("div");

     //    Enjecting CSS Styles
     quizSelect.classList.add("quiz-select");
     quizMaskRight.classList.add("circle-r");
     quizMaskLeft.classList.add("circle-l");
     quizTitle.classList.add("q-title");

     quizSelect.append(quizMaskLeft);
     quizSelect.appendChild(quizTitle);
     quizSelect.appendChild(quizMaskRight)
     quizTitle.innerText = answer.text;
     quizMaskLeft.innerText = answer.textTwo;

     if (answer.correct) {
       quizSelect.dataset.correct = answer.correct;
     }

     quizSelect.addEventListener("click", selectAnswer);
     answersContainer.appendChild(quizSelect);
   });
 }


 function resetState() {
   clearStatusClass(document.body);

   nextButton.classList.add("hide");
   while (answersContainer.firstChild) {
     answersContainer.removeChild(answersContainer.firstChild);
   }
 }

 function selectAnswer(e) {
   let selectedButton = e.target;
   let correct = selectedButton.dataset.correct;
   setStatusClass(document.body, correct);

   Array.from(answersContainer.children).forEach((button) => {
     setStatusClass(button, button.dataset.correct);
   });
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove("hide");
   } else {
     startButton.innerText = "Restart";
     startButton.classList.remove("hide");
   }
 }

 function setStatusClass(element, correct) {
   clearStatusClass(element);
   if (correct) {
     element.classList.add("correct");
   } else {
     element.classList.add("wrong");
   }
 }

 function clearStatusClass(element) {
   element.classList.remove("correct");
   element.classList.remove("wrong");
 }
let questions = [
  {
    question: "What is 49 - 32?",
    answers: [
      { textTwo: "01", text: "13", correct: false },
      { textTwo: "02", text: "13", correct: false },
      { textTwo: "03", text: "17", correct: true },
      { textTwo: "04", text: "-17", correct: false },
      { textTwo: "05", text: "16", correct: false },
      { textTwo: "06", text: "697", correct: false },
    ],
  },
  {
    question: "What is 70 - 17?",
    answers: [
      { textTwo: "01", text: "18", correct: false },
      { textTwo: "02", text: "79", correct: false },
      { textTwo: "03", text: "53", correct: true },
      { textTwo: "04", text: "32", correct: false },
    ],
  },
  {
    question: "What is 80 - 15?",
    answers: [
      { textTwo: "01", text: "74", correct: false },
      { textTwo: "02", text: "65", correct: true },
      { textTwo: "03", text: "93", correct: false },
      { textTwo: "04", text: "40", correct: false },
      { textTwo: "05", text: "975", correct: false },
    ],
  },

  {
    question: "What is 10 - 2?",
    answers: [
      { textTwo: "01", text: "-350", correct: false },
      { textTwo: "02", text: "-15", correct: false },
      { textTwo: "03", text: "8", correct: true },
      { textTwo: "04", text: "-34", correct: false },
      { textTwo: "05", text: "-34", correct: false },
    ],
  },
  {
    question: "What is 56 + 11?",
    answers: [
      { textTwo: "01", text: "102", correct: false },
      { textTwo: "02", text: "37", correct: false },
      { textTwo: "03", text: "44", correct: false },
      { textTwo: "04", text: "67", correct: true },
      { textTwo: "05", text: "50", correct: false },
    ],
  },
  {
    question: "What is 21 - 16?",
    answers: [
      { textTwo: "01", text: "170", correct: false },
      { textTwo: "02", text: "18", correct: false },
      { textTwo: "03", text: "5", correct: true },
      { textTwo: "04", text: "2", correct: false },
      { textTwo: "05", text: "26", correct: false },
    ],
  },

  {
    question: "Which one is Quadratic Equation?",
    answers: [
      { textTwo: "01", text: "-b±√(b²-4ac)", correct: false },
      { textTwo: "02", text: "(-b±√(b²-4ac))/(2a)", correct: true },

      { textTwo: "03", text: "-b±√", correct: false },
    ],
  }
  
];