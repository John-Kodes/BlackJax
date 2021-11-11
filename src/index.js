import React from "react";
import ReactDOM from "react-dom";
// Components
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Context
import { AuthProvider } from "./AuthContext";
// Redux
import { Provider } from "react-redux";
import store from "./store";
// Router
import { BrowserRouter } from "react-router-dom";
// Google Analytics
import ReactGA from "react-ga";

const TRACKING_ID = "G-N7LTFMKQDJ";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
