import React from "react";
import ReactDOM from "react-dom";
import AddLocaleModal from "./AddLocaleModal";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddLocaleModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
