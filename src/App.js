import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4> Redux Toolkit Example </h4>
      </header>
      <main className="App-main">
        <Posts />
      </main>
    </div>
  );
}

export default App;
