"use client";
import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
