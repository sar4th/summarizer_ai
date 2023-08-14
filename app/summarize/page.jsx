"use client";
import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./page.module.css";
import { fetchData } from "@/redux/slice";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Head from "next/head";
const page = () => {
  const summary = useSelector((state) => state.data.summary);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (url) {
      await fetchData(url);
    } else {
      alert("Please enter a url");
    }
    setLoading(false);
  };

  return (
    <>
    <Head>
      <title>Summarize</title>
    </Head>
      <main>
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          flexDirection={"column"}
          flexWrap={"wrap"}
          className={styles.main}
          height={"100vh"}
        >
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography
              sx={{ fontSize: "35px", fontWeight: "700", color: "#FFFFFF" }}
            >
              Summarize Articles With{" "}
              <span style={{ color: "#FFA07A" }}>GPT-4</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color: "#F5F5F5",
                mb: 4,
              }}
            >
              Unlocking the Power of Efficiency: Experience the Future of{" "}
              <br />
              Article Summaries with GPT-4. Discover a revolutionary way to{" "}
              <br />
              streamline your reading experience using cutting-edge AI <br />
              technology.
            </Typography>
          </Grid>
          <Grid item>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  style={{
                    border: "none",
                    width: "500px",
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
                    fontSize: "15px",
                    border: "none",
                    borderRadius: "3px",
                    backgroundColor: "#FFA07A",
                    color: "white",
                    padding: "5px 10px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  ↩
                </button>
              </form>
            </div>
          </Grid>
          <Grid item>
            <Box width={"500px"}>
              {loading ? (
                <Loading />
              ) : (
                <Typography
                  sx={{ color: "white", fontWeight: 400, fontSize: "15px" }}
                >
                  {summary}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default page;
