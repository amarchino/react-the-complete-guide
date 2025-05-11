import { useState, useCallback } from 'react';

import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [ answerState, setAnswerState ] = useState('');
  const [ userAnswers, setUserAnswers ] = useState([]);
  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers(userAnswers => [ ...userAnswers, selectedAnswer ]);
    setAnswerState('answered');
    setTimeout(() => {
      if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }
      setTimeout(() => setAnswerState(''), 2000);
    }, 1000);
  }, [ activeQuestionIndex ]);
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [ handleSelectAnswer ]);

  if(quizIsComplete) {
    return <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz completed!</h2>
    </div>
  }

  const shuffledAnswers = [ ...QUESTIONS[activeQuestionIndex].answers ]
  shuffledAnswers.sort(() => Math.random() - 0.5);


  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} key={activeQuestionIndex} />
        <h2>{ QUESTIONS[activeQuestionIndex].text }</h2>
        <ul id="answers">
          { shuffledAnswers.map(answer => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = '';
            if(answerState === 'answered' && isSelected) {
              cssClass = 'selected'
            } else if((answerState === 'correct' || answer === 'wrong') && isSelected) {
              cssClass = answerState
            }

            return <li key={answer} className='answer'>
              <button className={cssClass} onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>}) }
        </ul>
      </div>

    </div>
  );
}
