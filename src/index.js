import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename="react-shopping-mall">
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,

   document.getElementById("root")
);
