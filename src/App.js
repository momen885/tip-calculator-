import "./App.css";
// import Result from "./components/Result";
import TipSelection from "./components/TipSelection";

function App() {
  return (
    <main className="App">
      <div className="main-title">
        <h4>splitter</h4>
      </div>
      <div className="container">
        <TipSelection />
        {/* <Result /> */}
      </div>
    </main>
  );
}

export default App;
