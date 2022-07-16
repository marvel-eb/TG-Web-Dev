 /*
    document.body.appendChild(element)
    element.appendChild(another element)
    */

 //let progress1 = document.createElement('div')
 //progress1.classList.add('progress')
 //progress1.innerHTML = '1/7========================='

// list.forEach((item, index) => console.log(item, (index + 1).toString().padStart(2, '0')))


 ///=============================
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
   NextQuestion();
   //     setPrevQuestion();
 });


 //   // ===== Previous
 // prevButton.addEventListener("click", () => {
 //   currentQuestionIndex--;
 //   setPrevQuestion();
 // });


 function startQuiz() {
   startButton.classList.add("hide");
   shuffledQuestions = questions.sort(() => Math.random() - 0.6);
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove("hide");
   NextQuestion();
   //   setPrevQuestion();

   // ===== Previous
   //   shuffledQuestions = questions.sort(() => Math.random() + 0.7;
   //   currentQuestionIndex = -1;
   //   questionContainerElement.classList.remove("hide");
   //   setPrevQuestion();


 }

// function setNextQuestion() {
 function NextQuestion() {
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
     quizTitle.innerText = answer.answ;

     quizMaskLeft.innerText = answer.textOdd;
     quizMaskRight.innerText = answer.textEven;

     if (answer.correct) {
       quizSelect.dataset.correct = answer.correct;
     }

       
       
///////////
  
   
 
/////////

       
       
       
       
     quizSelect.addEventListener("click", selectAnswer);
     answersContainer.appendChild(quizSelect);
   });
 }



 function resetState() {
//--! clearStatusClass(document.body);
   clearStatus(document.getElementById("quiz-container"));
     
   nextButton.classList.add("hide");
   while (answersContainer.firstChild) {
     answersContainer.removeChild(answersContainer.firstChild);
   }
        // ===== Previous
    prevButton.classList.add("hide");
   while (answersContainer.firstChild) {
     answersContainer.removeChild(answersContainer.firstChild);
   }  
     
     
 }


 function selectAnswer(e) {
   let selectedButton = e.target;
   let correct = selectedButton.dataset.correct;
   //--!Status(document.body, correct);
     
     Status(document.getElementById("quiz-container"), correct);

   Array.from(answersContainer.children).forEach((button) => {
     Status(button, button.dataset.correct);
   });


   // ===== Previous
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
     prevButton.classList.remove("hide");
   } else {
     startButton.innerText = "Restart";
     startButton.classList.remove("hide");
   } //


   if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextButton.classList.remove("hide");
   } else {
     startButton.innerText = "Restart";
     startButton.classList.remove("hide");
   }
 }
// function setStatusClass(element, correct) {
 function Status(element, correct) {
//   clearStatusClass(element);
      clearStatus(element);
   if (correct) {
     element.classList.add("correct");
   } else {
     element.classList.add("wrong");
   }
 }

 function clearStatus(element) {
   element.classList.remove("correct");
   element.classList.remove("wrong");
 }

 // ================ Questions + Answers ================
// ======================================================
let questions = [
  {
 
    question: "What is 49 - 32?",
   
    answers: [
     
      { textOdd:  "01", answ: "13", correct: false },
      { textEven: "02", answ: "13", correct: false },
      { textOdd:  "03", answ: "17", correct: true },
      { textEven: "04", answ: "-17", correct: false },
      { textOdd:  "05", answ: "16", correct: false },
      { textEven: "06", answ: "697", correct: false },
    ],
  },
  {
     
    question: "What is 70 - 17?",
    answers: [
      { textOdd:  "01", answ: "18", correct: false },
      { textEven: "02", answ: "79", correct: false },
      { textOdd:  "03", answ: "53", correct: true },
      { textEven: "04", answ: "32", correct: false },
    ],
  },
  {
     
    question: "What is 80 - 15?",
    answers: [
      { textOdd:  "01", answ: "74", correct: false },
      { textEven: "02", answ: "65", correct: true },
      { textOdd:  "03", answ: "93", correct: false },
      { textEven: "04", answ: "40", correct: false },
      { textOdd:  "05", answ: "975", correct: false },
    ],
  },

  {
     
    question: "What is 10 - 2?",
    answers: [
      { textOdd:  "01", answ: "-350", correct: false },
      { textEven: "02", answ: "-15", correct: false },
      { textOdd:  "03", answ: "8", correct: true },
      { textEven: "04", answ: "-34", correct: false },
      { textOdd:  "05", answ: "-34", correct: false },
    ],
  },
  {
     
    question: "What is 56 + 11?",
    answers: [
      { textOdd:  "01", answ: "102", correct: false },
      { textEven: "02", answ: "37", correct: false },
      { textOdd:  "03", answ: "44", correct: false },
      { textEven: "04", answ: "67", correct: true },
      { textOdd:  "05", answ: "50", correct: false },
    ],
  },
  {
    
    question: "What is 21 - 16?",
    answers: [
      { textOdd:  "01", answ: "170", correct: false },
      { textEven: "02", answ: "18", correct: false },
      { textOdd:  "03", answ: "5", correct: true },
      { textEven: "04", answ: "2", correct: false },
      { textOdd:  "05", answ: "26", correct: false },
    ],
  },

  {
    
     
    question: "Which one is Quadratic Equation?",
    answers: [
    
      { textOdd: "01", answ: "-b±√(b²-4ac)", correct: false },
      { textEven: "02", answ: "(-b±√(b²-4ac))/(2a)", correct: true },

      { textOdd: "03", answ: "-b±√", correct: false },
    ],
  }
  
];

