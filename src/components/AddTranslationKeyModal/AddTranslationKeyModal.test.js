import React from "react";
import ReactDOM from "react-dom";
import AddTranslationKeyModal from "./AddTranslationKeyModal";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddTranslationKeyModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
