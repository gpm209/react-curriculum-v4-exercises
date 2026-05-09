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

/* 
  I added the useRef() so it can access the input element in the DOM. 
  Inside the focusInput function, we use the object (refInput) created by the useref along with the .current to call the focus() method.
  The .focus() method moves the cursor into the input field. 
  The ref was attached to the <input> using the ref attribute.
*/
