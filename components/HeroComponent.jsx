import { Grid, Typography } from '@mui/material'
import React from 'react'

const HeroComponent = () => {
  return (
    <Grid
    item
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    textAlign="center"
    mb={4}
    md={12}
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

    <div style={{ textAlign: "left" }}>
      <Typography
        sx={{
          fontSize: ["12px", "14px", "15px"],
          fontWeight: "400",
          color: "#F5F5F5",
          mt: 2,
          lineHeight: "1.5",
        }}
      >
        Unlocking the Power of Efficiency: Experience the Future of{" "}
        <br />
        Article Summaries with GPT-4. Discover a revolutionary way to{" "}
        <br />
        streamline your reading experience using cutting-edge AI <br />
        technology.
      </Typography>
    </div>
  </Grid>
  )
}

export default HeroComponent