import "./TimeStopper.css";
import { useState, useRef } from "react";
export default function TimeStopper({ title, targetTime }) {
  const timer = useRef();
  const [timeStart, setTimeStart] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // kiểm tra đã bắt đầu
  // chơi chưa

  function handleStart() {
    setHasStarted(true); // đã bắt đầu chơi
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
    setTimeStart(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimeStart(false);
  }
  //  đã dừng chưa + đã chơi chưa  + hết time chưa
  const isWin = !timeStart && !timeExpired && hasStarted;
  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>Bạn đã thua</p>}
        {isWin && <p>Bạn đã thắng ở {timer.current}s</p>}

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timeStart ? handleStop : handleStart}>
          {timeStart ? "Stop" : "Start"}
        </button>
        <p className={timeStart ? "active" : undefined}>
          {timeStart ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
