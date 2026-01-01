import "./ResultModel.css";
import { createPortal } from "react-dom";
import { useRef, useImperativeHandle } from "react";
export default function ResultModel({
  remainingTime,
  timeTarget,
  ref,
  onReset,
}) {
  const dialogInSide = useRef();
  const formattedRemaniningTime = (remainingTime / 1000).toFixed(2); // thời gian còn lại (s)
  const score = Math.round((1 - remainingTime / (timeTarget * 1000)) * 100);
  const result = formattedRemaniningTime > 0;
  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialogInSide.current.showModal();
        },
      };
    },
    []
  );
  return createPortal(
    <>
      <dialog ref={dialogInSide} className="result-modal">
        {result && <p>Điểm của bạn là: {score}</p>}
        <p>You {result ? "Win" : "lose"}</p>
        <p>
          Thời gian đích :{" "}
          <strong>
            {timeTarget}
            {timeTarget > 2 ? "s" : ""}
          </strong>
        </p>
        <p>
          Bạn đã dừng tại:{" "}
          <strong>
            {formattedRemaniningTime} second{timeTarget > 2 ? "s" : ""}
          </strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    </>,
    document.getElementById("root")
  );
}
