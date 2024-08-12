import React, { useState } from "react";
import "./prev-next.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function PrevNext() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleIncrement = () => {
    if (step >= 1 && step < 3) setStep(step + 1);
  };

  const handleDecrement = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="prev-next">
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <p className="message">{`Step ${step} : ${messages[step - 1]}`}</p>

            <div className="buttons">
              <button onClick={handleDecrement} className="btn">
                Previous
              </button>
              <button onClick={handleIncrement} className="btn">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
