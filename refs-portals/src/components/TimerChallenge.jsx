export default function TimerChallenge({ title, targetTime }) {
  return (
    <section class="challenge">
      <h2>{ title }</h2>
      <p class="challenge-time">
        { targetTime } second{ targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button>
          Start Challenge
        </button>
      </p>
      <p className="">
        Time is running.../Timer inactive
      </p>
    </section>
  );
}
