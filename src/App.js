import React, { useState } from "react";
import './App.css';
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

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
        {currentMenuEntry === "Contact" && (
          <ContactForm></ContactForm>
        )}
        {currentMenuEntry === "Portfolio" && (
          <Portfolio></Portfolio>
        )}
        {currentMenuEntry === "About me" && (
          <About></About>
        )}
        {currentMenuEntry === "Resume" && (
          <Resume></Resume>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
