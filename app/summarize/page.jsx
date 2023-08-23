"use client";
import {
  Alert,
  Box,
  Grid,
  Input,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { Suspense, use, useEffect, useState } from "react";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Head from "next/head";
import ErrorPage from "@/components/ErrorPage";
import { fetchData } from "@/redux/slice";
import { useSpeechSynthesis } from "react-speech-kit";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeroComponent from "@/components/HeroComponent";
const Page = () => {
  const dispatch = useDispatch();
  const { speak, cancel } = useSpeechSynthesis();
  const message = useSelector((state) => state?.data?.error);

  const summary = useSelector((state) => state?.data?.summary);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [urlErr, setUrlErr] = useState(false);

  const handleListen = () => {
    if (!summary) {
      setOpen(true);
    } else {
      speak({ text: summary });
      setPlaying(true);
    }
  };

  const handleStop = () => {
    cancel();
    setPlaying(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url) {
      setLoading(true);
      try {
        await fetchData(url, dispatch);
      } finally {
        setLoading(false);
      }
    } else {
      // alert("Please enter a URL");
      setUrlErr(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUrl = () => {
    setUrlErr(false);
  };

  return (
    <>
      <Head>
        <title>Summarize</title>
      </Head>
      <main>
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          className={styles.main}
          minHeight="100vh"
          px={2}
          md={12}
        >
          <HeroComponent />
          <Grid item mb={2} flexWrap={"wrap"} md={12}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  border: "none",
                  width: "100%",
                  height: "30px",
                  textAlign: "center",
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "400",
                  borderRadius: "5px",
                  backgroundColor: "#F5F5F5",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  marginRight: "10px",
                }}
                type="text"
                placeholder="Paste the URL"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
              <button
                type="submit"
                style={{
                  fontSize: "12px",

                  border: "none",
                  borderRadius: "3px",
                  backgroundColor: "#ff3333",
                  color: "white",
                  cursor: "pointer",
                  padding: "5px 10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <TransitEnterexitIcon />
              </button>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                ml={1}
              >
                <button
                  type="button"
                  style={{
                    fontSize: "12px",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "#ff3333",
                    color: "white",
                    cursor: "pointer",
                    padding: "5px 10px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={playing ? handleStop : handleListen}
                >
                  {playing ? <StopCircleIcon /> : <RecordVoiceOverIcon />}
                </button>
              </Box>
            </form>
          </Grid>
          {loading && <Loading />}
          {message && <ErrorPage message={message} />}
          {summary && (
            <Grid
              item
              padding={"13px"}
              md={12}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                width="100%"
                maxWidth="1000px"
                // marginBottom={"10px"}
                height={"248px"}
                overflow={"auto"}
                padding={"5px"}
                borderRadius={"7px"}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 100,
                    fontSize: ["12px", "14px", "15px"],
                    lineHeight: "20px",
                    letterSpacing: ".5px",
                    textIndent: "30px",
                    textTransform: "capitalize",
                    textAlign: "justify",
                  }}
                >
                  {summary && summary}
                </Typography>
              </Box>
            </Grid>
          )}
          <Snackbar
            autoHideDuration={3000}
            open={open}
            onClose={handleClose}
            severity="warning"
          >
            <Alert severity="error">Please select a summary</Alert>
          </Snackbar>
          <Snackbar
            autoHideDuration={3000}
            open={urlErr}
            onClose={handleCloseUrl}
            severity="warning"
          >
            <Alert severity="error">Please enter a url</Alert>
          </Snackbar>
        </Grid>
      </main>
    </>
  );
};

export default Page;
