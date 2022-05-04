import React, { useState } from "react";
import Title from "./components/Title";
import NewTitle from "./components/NewTitle";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Hello");
  const clickerHandler = () => {
    setTitle("I have been clicked!");
  };

  const onSaveTitleDataHandler = (titleData) => {
    setTitle(`${titleData.title} ${titleData.name}`);
  };
  // setTimeout(() => {
  //   setTitle(title + 1);
  // }, 1000);
  return (
    <div className="App">
      <Title title={title} />
      <button onClick={clickerHandler}>Please click me</button>
      <NewTitle onSaveTitleData={onSaveTitleDataHandler} />
    </div>
  );
}

export default App;
