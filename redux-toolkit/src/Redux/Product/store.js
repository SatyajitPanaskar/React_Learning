import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./ProductReducer";

const store = configureStore({
  reducer: productReducer,
});
export default store;
