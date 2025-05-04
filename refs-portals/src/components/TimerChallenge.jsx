import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [ timerStarted, setTimerStarted ] = useState(false);
  const [ timerExpired, setTimerExpired ] = useState(false);


  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => setTimerExpired(true), targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timerExpired && <ResultModal targetTime={targetTime} result="lost" /> }
      <section class="challenge">
        <h2>{ title }</h2>
        <p class="challenge-time">
          { targetTime } second{ targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
