const quizForm = document.querySelector('.qns-form');
const resultPanel = document.querySelector('#result');
const Marks = document.querySelector('span.marks');
const testAnswers = ['B', 'D', 'B', 'C', 'B', 'B', 'D', 'A', 'C', 'A'];

quizForm.addEventListener('submit', e => {
  e.preventDefault();

  let userAnswers = [quizForm.qn1.value, quizForm.qn2.value, quizForm.qn3.value, quizForm.qn4.value, quizForm.qn5.value, quizForm.qn6.value, quizForm.qn7.value, quizForm.qn8.value, quizForm.qn9.value, quizForm.qn10.value];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === testAnswers[index]) {
      score += 10;
    }
  });

  resultPanel.classList.remove('d-none');


  scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  let output = 0;

  const counter = setInterval(() => {
    Marks.textContent = `${output}`;

    if (output === score) {
      clearInterval(counter);
    } else {
      output++;
    }
  }, 10)

  quizForm.reset();

});