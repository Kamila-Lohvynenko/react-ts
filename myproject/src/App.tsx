import React, { useState } from "react";
import "./App.css";
import AppHi from "./components/AppHi/AppHi";
import AppBtn from "./components/AppBtn/AppBtn";

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <AppHi userName="Kamila" />
      <h2>{counter}</h2>
      <AppBtn text="click me" onClick={() => setCounter(counter + 1)} />
    </div>
  );
};

export default App;
