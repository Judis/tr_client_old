import React from "react";
import ReactDOM from "react-dom";
import TranslationEditorPlaceholder from "./TranslationEditorPlaceholder";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <TranslationEditorPlaceholder />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
