import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./path-to-your-redux-store";

// import App from "./App"; // Update the path as per your project

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
