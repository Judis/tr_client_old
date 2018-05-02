import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Breadcrumbs />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
