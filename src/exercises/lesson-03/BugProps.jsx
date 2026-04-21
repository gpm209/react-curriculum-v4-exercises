// src/exercises/lesson-03/BugProps.jsx
/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  //let message = 'Hello, ' + name;

  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');

    // message = 'Hi, ' + name + '!';
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// In the original code, the message is stored in a regular js variable which is not tracked by React since it relies on the state to re-render the component and make the updates.
// Adding the useState allows it to be tracked and re-render the component
// the setMessage is the function we provide it to update and re-render the component.
// It is also missing the 'import { useState } from 'react' ' at the very top.
// Without importing useState, it'll be undefined
