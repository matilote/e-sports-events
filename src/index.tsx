import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layouts/App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
  );
};

if (module.hot) {
  module.hot.accept("./app/layouts/App.tsx", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
