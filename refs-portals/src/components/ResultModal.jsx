// import { forwardRef } from 'react';

// const ResultModal = forwardRef(function ResultModal({ result , targetTime }, ref) {
//   return (<dialog ref={ref} className="result-modal">
//     <h2>You { result }</h2>
//     <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
//     <p>You stopped the timer with <strong>X seconds left</strong></p>
//     <form method="dialog">
//       <button>Close</button>
//     </form>
//   </dialog>);
// })
// export default ResultModal;

import { useImperativeHandle, useRef } from 'react';

export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal()
    }
  }));

  return (<dialog ref={dialog} className="result-modal">
    {userLost && <h2>You lost</h2>}
    <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
    <p>You stopped the timer with <strong>{ formattedRemainingTime } seconds left</strong></p>
    <form method="dialog" onSubmit={onReset}>
      <button>Close</button>
    </form>
  </dialog>);
}
