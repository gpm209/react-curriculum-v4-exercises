import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child increment={increment} />
    </div>
  );
}

/*
  I fixed the counter state of the Parent component so it can correctly update its own state.
  It also passes the increment function to the Child so this one can trigger updates in the Parent.
 */
