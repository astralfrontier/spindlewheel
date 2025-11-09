import "./App.css";
import SpindlewheelSpread from "./SpindlewheelSpread";

function App() {
  return (
    <>
      <header className="container">
        <h1>Spindlewheel</h1>
      </header>
      <main className="container">
        <SpindlewheelSpread spreadname="character" />
      </main>
    </>
  );
}

export default App;
