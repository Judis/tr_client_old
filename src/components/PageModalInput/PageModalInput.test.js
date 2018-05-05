import React from "react";
import ReactDOM from "react-dom";
import PageModalInput from "./PageModalInput";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PageModalInput
      type="password"
      placeholder="Password"
      icon="lock"
      reference={null}
      errors={[]}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
