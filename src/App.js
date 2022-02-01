import React, { useState } from "react";
import './App.css';
import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation"
import Portfolio from "./components/Portfolio";

function App() {
  const [menuEntries] = useState([{ name: "About me" }, "Portfolio", "Contact", "Resume"]);

  const [currentMenuEntry, setCurrentMenuEntry] = useState(menuEntries[0].name);
  
  return (
    <div>{currentMenuEntry}
      <Navigation>
        
        menuEntries={menuEntries}
        setCurrentMenuEntry={setCurrentMenuEntry}
        currentMenuEntry={currentMenuEntry}
      </Navigation>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
