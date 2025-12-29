import "./ResultModel.css";
export default function ResultModel({ result, timeTarget, ref }) {
  return (
    <>
      <dialog ref={ref} className="result-modal">
        <p>You {result}</p>
        <p>
          Thời gian đích :{" "}
          <strong>
            {timeTarget}
            {timeTarget > 2 ? "s" : ""}
          </strong>
        </p>
        <p>
          Bạn đã dừng tại: <strong>X second{timeTarget > 2 ? "s" : ""}</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}
