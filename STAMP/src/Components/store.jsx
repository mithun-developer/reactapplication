import { configureStore } from "@reduxjs/toolkit";

import { loginreducer } from "./reducer";

const store = configureStore({
  reducer: {
    app: loginreducer,
  },
});

export default store;
