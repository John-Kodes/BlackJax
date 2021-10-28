import React, { useEffect } from "react";
// Pages
import ForgotPassword from "./pages/ForgotPassword";
import Gamin from "./pages/Gamin";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Me from "./pages/Me";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
// Components
import GlobalTheme from "./Globals/GlobalTheme";
import BGSVG from "./img/BGSVG.svg";
import { getLastSave } from "./components/gameSlice";
import { HeartsSm } from "./img/suitsIcons";
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

    dispatch(getLastSave(localBank));
  }, [dispatch]);

  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <AuthorTag>
        <HeartsSm />
        Made by John Daniel Semine
      </AuthorTag>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/gamin" component={Gamin} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <BgSvgContainer />
    </ThemeProvider>
  );
}

const AuthorTag = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;

  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 1rem;

  svg {
    height: 1.6rem;
    width: 1.6rem;
    margin-right: 1rem;
  }
`;

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
