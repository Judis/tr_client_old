import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
import "./index.css";
import Session from "./lib/session";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

UIkit.use(Icons);

Session.validatePath(() => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
});

registerServiceWorker();
