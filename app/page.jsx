"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Grid, Typography } from "@mui/material";
import Robo from "../public/assests/robo.png";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Home</title>
      </Head>
      <Grid
        container
        height={"100vh"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          item
          md={6}
          sx={{ padding: "25px" }}
          height={"100vh"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "50px",
              color: "white",
            }}
          >
            Simplify Complexity
            <br />
            Elevate Efficiency
          </Typography>
          <Link href={"/summarize"}>
            <Button
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                border: "none",
                borderRadius: "3px",
                padding: "5px",
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
          height={"100vh"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <AnimatePresence>
            <motion.div
              style={{ width: "500px", height: "500px" }}
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
