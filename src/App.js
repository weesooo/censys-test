import React from "react";
import Header from "./assets/Header.js";
//BEM

function App() {
  return (
    <div className="app">
      {/* Header Componenet */}
      <div className="app-header">
        <Header />
      </div>
    </div>
  );
}

export default App;
