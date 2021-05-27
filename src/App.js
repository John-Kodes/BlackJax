import React, { useEffect } from "react";
// Components
import GlobalTheme from "./Globals/GlobalTheme";
import Gamin from "./pages/Gamin";
import Home from "./pages/Home";
import About from "./pages/About";
import BGSVG from "./img/BGSVG.svg";
import { getLastSave } from "./components/gameSlice";
// Styling
import styled from "styled-components";
import GlobalStyles from "./Globals/GlobalStyles";
import { ThemeProvider } from "styled-components";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // get last save from localStorage

    const getLocalBank = Number(localStorage.getItem("localBank"));
    const localBank = getLocalBank < 1 ? 1000 : getLocalBank;
    console.log(localBank);

    dispatch(getLastSave(localBank));
  }, [dispatch]);

  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/gamin" component={Gamin} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AnimatePresence>
      <BgSvgContainer />
    </ThemeProvider>
  );
}

const BgSvgContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;

  z-index: -9999999999999999999999;

  background-image: url(${BGSVG}),
    linear-gradient(185deg, rgba(0, 0, 0, 0.9), rgba(3, 0, 8, 0.9));
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center center;
`;
export default App;
