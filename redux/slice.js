import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
// import store from "./store";

const dummy_summary =
  "unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
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
