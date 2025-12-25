import "./Player.css";
import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState();

  function hadleClick() {
    setEnterPlayerName(playerName.current.value);
  }
  return (
    <>
      <main id="player">
        <h2>Welcome {enterPlayerName ?? "No name"}</h2>
        <div>
          <input
            type="text"
            ref={playerName}
            defaultValue="hay nhap ten"
          ></input>
          <button onClick={hadleClick}>Enter Your Name</button>
        </div>
      </main>
    </>
  );
}
