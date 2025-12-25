import Header from "./Components/Header/Header.jsx";
import Player from "./Components/Player/Player.jsx";
import TimeStopper from "./Components/TimeStopper/TimeStopper.jsx";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimeStopper title="level" targetTime={1} />
        <TimeStopper title="level" targetTime={5} />
        <TimeStopper title="level" targetTime={10} />
        <TimeStopper title="level" targetTime={15} />
      </div>
    </>
  );
}
export default App;
