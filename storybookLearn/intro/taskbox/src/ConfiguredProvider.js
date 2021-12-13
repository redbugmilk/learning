import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

function ConfiguredProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ConfiguredProvider;
