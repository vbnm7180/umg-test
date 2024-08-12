import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#dd6a35",
          colorInfo: "#dd6a35",
          borderRadius: 8,
          fontFamily: "Inter, sans-serif",
        },
        components: {
          "Card": {
            borderRadiusLG: 8,
            paddingLG: 0,
          },
          "Typography": {
            fontSizeHeading1: 32,
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
          "Table": {
            colorText: "#585858",
            headerBg: "#fffff",
          },
          "Select": {
            colorIcon: "rgb(221,106,53)",
            colorIconHover: "rgb(221,106,53)",
            controlHeight: 40,
            optionSelectedBg: "rgba(0,0,0,0.04)",
          },
          "Input": {
            controlHeight: 40
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
