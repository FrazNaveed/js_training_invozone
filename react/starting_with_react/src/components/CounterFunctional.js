import React, { useEffect, useState } from "react";

const CounterFunctional = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("Useffect ran");
  }, []);

  return (
    <div>
      <h1>Functional Component</h1>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      Counter: {counter}
    </div>
  );
};

export default CounterFunctional;
