import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CssBaseline } from "@mui/material";
import ContextDraggable from './context/ContextDraggable'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ContextDraggable>

      <App />
      </ContextDraggable>
    </BrowserRouter>
  </React.StrictMode>
);
