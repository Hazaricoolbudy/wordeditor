import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // weather darkmode is enable or not
  const [alert, setAlert] = useState(null);
  let togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#461a95";
      showAlert("Dark mode is enable", "sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable", "sucess");
    }
  };
  const showAlert = (massage, type) => {
    setAlert({
      type: type,
      msg: massage,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      
        {/*  <Navbar
            title="TextEditor"
            about="About us"
            mode={mode}
            togglemode={togglemode}
          />
          <Alert alert={alert} />
          <div className="container my-3"></div>
          <Textform
            showAlert={showAlert}
            heading="Enter your Text for Edit"
            mode={mode}
          />
          
      <About />
        */}
        <BrowserRouter>
        <div>
          <h1>Hello, React Router!</h1>
          <Routes>
          
            <Route path="/" element={<Navbar
              title="TextEditor"
              about="About us"
              mode={mode}
              togglemode={togglemode}
            />} />
            <Route path="alert" element={<Alert alert={alert} />} />

            <Route path="textform" element={<Textform
              showAlert={showAlert}
              heading="Enter your Text for Edit"
              mode={mode}
            />} />
            <Route path="about" element={<About />} />
            
          </Routes>
        </div>
      </BrowserRouter>


     </> 
  );
}

export default App;
