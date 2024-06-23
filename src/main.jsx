import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./lib/index.js";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
