import React, { useEffect } from "react";
// Pages
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import GaminPage from "./pages/GaminPage";
import HomePage from "./pages/HomePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignupPage from "./pages/SignupPage";
// Context
import { AuthProvider } from "./AuthContext";
// Components
import GlobalTheme from "./Globals/GlobalTheme";
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
      <AuthProvider>
        <GlobalStyles />
        <AuthorTag>
          <HeartsSm />
          Made by John Daniel Semine
        </AuthorTag>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/gamin" component={GaminPage} />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordPage}
            />
            <Route exact path="/leaderboard" component={LeaderboardPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route
              exact
              path="/reset-password/:resetToken"
              component={ResetPasswordPage}
            />
            <Route exact path="/signup" component={SignupPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </AnimatePresence>
      </AuthProvider>
    </ThemeProvider>
  );
}

const AuthorTag = styled.div`
  position: fixed;
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

export default App;
