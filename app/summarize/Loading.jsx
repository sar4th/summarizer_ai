import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loading;
