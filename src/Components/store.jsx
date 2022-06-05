import { configureStore } from "@reduxjs/toolkit";

import { loginreducer } from "../Components/reducer";

const store = configureStore({
  reducer: {
    app: loginreducer,
  },
});

export default store;
