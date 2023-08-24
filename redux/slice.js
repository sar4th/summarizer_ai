import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const dummy_summary = "";
const initialState = {
  summary: dummy_summary,
  loading: false,
  data: "",
  error: "",
  navBar: false,
  setHome: false,
  setGetStarted: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.summary = action?.payload;
    },
    setLoading: (state, action) => {
      state.loading = action?.payload;
    },
    setError: (state, action) => {
      state.error = action?.payload;
    },
    clearError: () => {
      state.error = null;
    },
    setNavBar: (state, action) => {
      state.navBar = action.payload;
    },
    setGetStarted: (state, action) => {
      state.setGetStarted = action.payload;
      console.log("IT IS ", state.setGetStarted);
    },
  },
});

export const {
  setData,
  setLoading,
  setError,
  setNavBar,
  clearError,
  setGetStarted,
} = dataSlice.actions;

export default dataSlice.reducer;

export const fetchData = async (url, dispatch) => {
  if (!url) return;
  dispatch(setLoading(true));
  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: `${url}`,
      length: "3",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEW_API_KEY,
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const summary = response?.data?.summary;

    dispatch(setData(summary));
    dispatch(setLoading(false));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(setError(errorMessage));
  }
};
