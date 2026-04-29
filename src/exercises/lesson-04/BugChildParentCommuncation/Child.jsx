export default function Child({ increment }) {
  return <button onClick={increment}>Increment Counter</button>;
}

/* The Child component accepts the increment function through props from the Parent component and then use it in the onClick handler. This now allows the Child to update the Parent's state */
