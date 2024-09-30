import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./reducer";
import { loginReducer } from "./loginReducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    login: loginReducer,
  },
});

export default store;
