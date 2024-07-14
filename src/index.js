import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./component/Context/UserContext";
import "animate.css";
import { ConfettiProvider } from "./Providers/confetti-provider";
import { ProgressProvider } from "./context/ProgressContex";
import { CartProvider } from "./context/cartContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserContext>
      <ConfettiProvider />
      <ProgressProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProgressProvider>
    </UserContext>
  </BrowserRouter>
);

reportWebVitals();
