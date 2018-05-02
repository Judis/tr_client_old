import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PageModalContainer from "./PageModalContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <PageModalContainer />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
