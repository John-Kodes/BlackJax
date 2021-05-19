import React from "react";
// Components
import GlobalTheme from "./Globals/GlobalTheme";
import Home from "./pages/Home";

// Styling
import GlobalStyles from "./Globals/GlobalStyles";
import { ThemeProvider } from "styled-components";

// AnimatePresence allows us to animate components when they're removed from the React tree.
// exitBeforeEnter is to make sure it triggeres the exit animation AND THEN enter animation
// instead of them both happening at the same time

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
