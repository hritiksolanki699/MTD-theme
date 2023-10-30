import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Oval } from "react-loader-spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <Oval
          height={80}
          width={80}
          color="#727CF5"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#727CF5"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
