import React, { useState, createContext } from "react";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topBar";
import { NotFound } from "./routes/NotFound";
import Home from "./routes/Home";
import { Education } from "./routes/Education/Education";
import ParticleBackground from "./components/particleBackground";
import About from "./routes/About/About";
import Skills from "./routes/Skills/Skills";

export const appContext = createContext();
function App() {

  const [appMode, setAppMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: appMode,
    },
  });
    
  const paperStyles = { borderRadius: 0, minHeight: "100vh" }; 

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} style={paperStyles}>
        <ParticleBackground />
        <div className="App">
          <appContext.Provider value={{ appMode, setAppMode, theme }}>
            <TopBar />
          </appContext.Provider>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}> </Route>
            <Route path="/education" element={<Education />}> </Route>
            <Route path="**" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}


export default App;