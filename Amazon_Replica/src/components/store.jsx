import { configureStore } from "@reduxjs/toolkit";

import { loginreducer } from "../components/reducer";

const store = configureStore({
  reducer: {
    app: loginreducer,
  },
});

export default store;
