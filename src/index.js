import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AddressProvider, ColorContrastProvider, DeviceProvider, LeaderboardProvider } from "contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <LeaderboardProvider>
      <DeviceProvider>
        <AddressProvider>
        <ColorContrastProvider>
          <App />
        </ColorContrastProvider>
        </AddressProvider>
        </DeviceProvider>
      </LeaderboardProvider>
    </Router>
  </React.StrictMode>
);
