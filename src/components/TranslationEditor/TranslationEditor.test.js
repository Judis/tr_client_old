import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TranslationEditor from "./TranslationEditor";

it("renders without crashing", () => {
  const translation_key_mock = {};
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <TranslationEditor edited_key={translation_key_mock} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
