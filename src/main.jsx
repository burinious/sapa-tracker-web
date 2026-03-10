import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import App from "./App";
import { appTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { scrollBehavior: "smooth" },
          body: {
            backgroundColor: appTheme.palette.background.default,
            color: appTheme.palette.text.primary,
          },
          "*:focus-visible": {
            outline: `3px solid ${appTheme.palette.secondary.main}`,
            outlineOffset: "2px",
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
