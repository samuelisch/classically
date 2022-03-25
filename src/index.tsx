import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./reducers/store";

import App from "./App";
import ThemeContextWrapper from "./ThemeContextWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
