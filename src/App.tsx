import React from "react";
import { Routes } from "./routes";
import "./global.css";
import { Header } from "./pages/Header";
function App() {
  return(
  <>
  <Header />
  <Routes />;
  </>);
}

export default App;
