import React from "react";
// Components
import GlobalTheme from "./components/GlobalTheme";
import Home from "./pages/Home";
// Styling
import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
// Animation
// import { motion } from "framer-motion";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
