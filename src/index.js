import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AddressProvider, ColorContrastProvider, DeviceProvider } from "contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DeviceProvider>
        <AddressProvider>
        <ColorContrastProvider>
          <App />
        </ColorContrastProvider>
        </AddressProvider>
        </DeviceProvider>
    </Router>
  </React.StrictMode>
);
