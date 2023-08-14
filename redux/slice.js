import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import store from "./store";
const initialState = {
  data: "",
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
  },
});

export const { setData, setLoading } = dataSlice.actions;

export default dataSlice.reducer;

export const fetchData = async (url) => {
  console.log(process.env.API_KEY);
  store.dispatch(setLoading(true));
  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: `${url}`,
      length: "3",
    },
    headers: {
      "X-RapidAPI-Key": "b6a4980ecbmsh2c2b498ae224e88p161b68jsn0540f739dc60",
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const summary = response?.data?.summary;

    store.dispatch(setData(summary));
    store.dispatch(setLoading(false));
  } catch (error) {
    console.error(error);
  }
};
