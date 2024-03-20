import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorldApp from "@apps/HelloWorldApp.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelloWorldApp />
  </React.StrictMode>
);
