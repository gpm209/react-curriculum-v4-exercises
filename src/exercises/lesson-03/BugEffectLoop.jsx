//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
//The given useEffect had no dependency array, which triggers it to run after each render. The empty array ensures it only runs once
//The count + 1 inside the setCount is also triggering another render
