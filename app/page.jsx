
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Grid, Typography } from "@mui/material";
import Robo from "../public/assests/robo.png";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavBar } from "@/redux/slice";

export default function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
  },[])
  return (
    <main className={styles.main}>
      <Head>
        <title>Home</title>
      </Head>
      <Grid
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Grid
          item
          md={6}
          sm={12}
          sx={{
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: ["24px", "36px", "48px"],
              color: "white",
              mb: 2,
              textAlign:"left"
            }}
          >
            Simplify Complexity
            <br />
            Elevate Efficiency
          </Typography>
          <Link href="/summarize">
            <Button
            onClick={()=>dispatch(setNavBar(true))}
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                border: "none",
                borderRadius: "3px",
                padding: "10px 20px",
                color: "white",
                background: "#194c5f",
                textTransform: "capitalize",
              }}
            >
              Get started
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatePresence>
            <motion.div
              style={{ width: "100%", maxWidth: "500px" }}
              initial={{ translateY: 0 }}
              animate={{
                translateY: [20, -20, 20],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image src={Robo} width={500} height={500} alt="Robo" />
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>
    </main>
  );
}
