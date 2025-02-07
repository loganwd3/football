import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./slices/InfoSlice.js";
import { Provider } from "react-redux";
// const store = configureStore({
//   reducer: {
//     info: infoSlice,
//   },
// });
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);
