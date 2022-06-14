import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import "./index.scss";
import store from "./store/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppWrapper />
        </Provider>
    </BrowserRouter>
);
