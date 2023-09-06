import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
      </div>
    </>
  );
}

export default App;
