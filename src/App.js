import React, { useState } from "react";
import './App.css';
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  const [menuEntries] = useState(["About me", "Portfolio", "Contact", "Resume"]);

  const [currentMenuEntry, setCurrentMenuEntry] = useState(menuEntries[0]);
  
  return (
    <div>
      <Header        
        menuEntries={menuEntries}
        setCurrentMenuEntry={setCurrentMenuEntry}
        currentMenuEntry={currentMenuEntry}
      >
      </Header>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
