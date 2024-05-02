import "./styles/App.css";
import useFred from "./hooks/useFred";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";

function App() {
  const { fredData, getData } = useFred();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="App"></div>
    </>
  );
}

export default App;
