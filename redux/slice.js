import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
// import store from "./store";

const dummy_summary =
  "";
const initialState = {
  summary: dummy_summary,
  loading: false,
  data: "",
  error: null,
  navBar: false,
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
    setNavBar: (state, action) => {
      state.navBar = action.payload;
      console.log(state?.navBar);
    },
  },
});

export const { setData, setLoading, setError, setNavBar } = dataSlice.actions;

export default dataSlice.reducer;

export const fetchData = async (url,dispatch) => {
  if(!url) return
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
    dispatch(setError(error));
    console.error(error);
  }
};
