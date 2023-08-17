import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import store from "./store";
const initialState = {
  data: "",
  navBar: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.summary = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setNavBar: (state, action) => {
      state.navBar = action.payload;
      console.log(state.navBar);
    },
  },
});

export const { setData, setLoading, setError, setNavBar } = dataSlice.actions;

export default dataSlice.reducer;

export const fetchData = async (url) => {
  store.dispatch(setLoading(true));
  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: `${url}`,
      length: "2",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEW_API_KEY,
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const summary = response?.data?.summary;
    console.log(summary);
    store.dispatch(setData(summary));
    store.dispatch(setLoading(false));
  } catch (error) {
    store.dispatch(setError(error));
    console.error(error);
  }
};
