import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount funtion to start the app
function mount(el) {
  ReactDOM.render(<App />, el);
}

//TWO USE CASES
//Case 1: running REMOTE app and in development
if (process.env.NODE_ENV === "development") {
  const rootEl = document.querySelector("#_marketing-dev-root");
  if (rootEl) {
    mount(rootEl);
  }
}

//Case 2: running app inside the HOST
export { mount };
