import { useState } from 'react';

import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [ userAnswers, setUserAnswers ] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  if(quizIsComplete) {
    return <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz completed!</h2>
    </div>
  }

  const shuffledAnswers = [ ...QUESTIONS[activeQuestionIndex].answers ]
  shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(userAnswers => [ ...userAnswers, selectedAnswer ]);
  }


  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
        <h2>{ QUESTIONS[activeQuestionIndex].text }</h2>
        <ul id="answers">
          { shuffledAnswers.map(answer => <li key={answer} className='answer'>
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>) }
        </ul>
      </div>

    </div>
  );
}
