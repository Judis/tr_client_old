import React from "react";
import ReactDOM from "react-dom";
import TranslationEditor from "./TranslationEditor";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TranslationEditor />, div);
  ReactDOM.unmountComponentAtNode(div);
});
