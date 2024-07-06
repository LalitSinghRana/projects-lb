import React, { useState } from "react";
import "./App.css";

const arr = new Array(20);

for (let i = 0; i < 20; i++) {
  arr[i] = `key-${i}`;
}


function MouseEnterElement({text}) {
  const [hoverCount, setHoverCount] = useState(0);
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="enter"
      onMouseEnter={() => {
        setHoverCount((prev) => prev + 1);
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      {text} hover to show {visible ? `${hoverCount}`: 'count'}
    </div>
  );
}


export default function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      {arr.map((val) => (
        <MouseEnterElement key={val} text={val} />
      ))}
    </div>
  );
}
