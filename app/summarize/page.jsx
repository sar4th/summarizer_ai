"use client";
import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./page.module.css";
import { fetchData } from "@/redux/slice";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Head from "next/head";
import ErrorPage from "@/components/ErrorPage";

const Page = () => {
  const error=useSelector((state)=>state.data.error)
  const summary = useSelector((state) => state.data.summary);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (url) {
      await fetchData(url);
    } else {
      alert("Please enter a URL");
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
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          className={styles.main}
          minHeight="100vh"
          px={2}

        >
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            mb={4}
          >
            <Typography
              sx={{
                fontSize: ["24px", "30px", "35px"],
                fontWeight: "700",
                color: "#FFFFFF",
                marginBottom: "8px",
              }}
            >
              Summarize Articles With{" "}
              <span style={{ color: "#ff3333" }}>GPT-4</span>
            </Typography>

            <div style={{textAlign:"left"}}>
            <Typography
              sx={{
                fontSize: ["12px", "14px", "15px"],
                fontWeight: "400",
                color: "#F5F5F5",
                mt: 2,
                lineHeight: "1.5"
              }}
            >
              Unlocking the Power of Efficiency: Experience the Future of <br />
              Article Summaries with GPT-4. Discover a revolutionary way to{" "}
              <br />
              streamline your reading experience using cutting-edge AI <br />
              technology.
            </Typography>
            </div>
          </Grid>
          <Grid item mb={2}>
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
                  minWidth:"300px",
                  maxWidth: "300px",
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
                  fontSize: "17px",

                  border: "none",
                  borderRadius: "3px",
                  backgroundColor: "#ff3333",
                  color: "white",
                  cursor: "pointer",
                  padding: "5px 10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                ↩
              </button>
            </form>
          </Grid>
          <Grid item >
            <Box width="100%" maxWidth="500px" marginBottom={"10px"}  >
              {loading ? (
                <Loading />
              ) : (
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: ["12px", "14px", "15px"],
                  }}
                >
                  {error ? <ErrorPage/> : summary }
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Page;
