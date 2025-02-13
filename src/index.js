import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId="iaLFUv9UWYDN3Adk1hvxQtHbOdCJG3aOUV0Ksfyg"
      serverUrl="https://nvezkmgfcvz7.usemoralis.com:2053/server"
    >
      <NotificationProvider>
        <BrowserRouter
          basename={
            process.env.NODE_ENV === "development" ? "/" : "/Netflix-Starter"
          }
        >
          <App />
        </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
