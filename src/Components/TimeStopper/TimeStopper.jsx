import "./TimeStopper.css";
import { useState, useRef } from "react";
import ResultModel from "../ResultModel/ResultModel.jsx";
export default function TimeStopper({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const timerActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaining((prevTime) => prevTime - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModel ref={dialog} timeTarget={targetTime} result="lose" />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerActive ? handleStop : handleStart}>
          {timerActive ? "Stop" : "Start"}
        </button>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
