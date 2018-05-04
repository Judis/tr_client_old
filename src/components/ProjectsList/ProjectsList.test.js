import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProjectsList from "./ProjectsList";

beforeEach(function() {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => {
        return { data: [] };
      }
    })
  );
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ProjectsList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
