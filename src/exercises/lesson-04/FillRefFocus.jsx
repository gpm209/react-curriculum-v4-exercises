// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const refInput = useRef(null);

  function focusInput() {
    refInput.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={refInput} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
