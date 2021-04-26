import React from "react";
// Components
import GlobalTheme from "./Globals/GlobalTheme";
import Home from "./pages/Home";
// Styling
import GlobalStyles from "./Globals/GlobalStyles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
