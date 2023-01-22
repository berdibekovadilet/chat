import React from "react";
import "./style.scss";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
