import React, { useState } from "react";

import "./counter.css";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div className="step">
        <button onClick={() => setStep(step - 1)}> - </button>
        <p>{`Step :- ${step}`}</p>
        <button onClick={() => setStep(step + 1)}> + </button>
      </div>

      <div className="count">
        <button onClick={() => setCount(step + (count - 1) - 1)}> - </button>
        <p>{`Count :- ${count}`}</p>
        <button onClick={() => setCount(step + (count + 1) - 1)}> + </button>
      </div>

      <p>{`${count} days from today is ${date.toDateString()}`}</p>
    </div>
  );
}
