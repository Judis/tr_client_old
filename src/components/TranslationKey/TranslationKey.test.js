import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TranslationKey from "./TranslationKey";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <TranslationKey />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
