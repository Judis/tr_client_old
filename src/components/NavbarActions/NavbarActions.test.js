import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NavbarActions from "./NavbarActions";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <NavbarActions />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
