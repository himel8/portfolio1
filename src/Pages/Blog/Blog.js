import { Box } from "@mui/system";
import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import ParticleBg from "../Shared/Particale/ParticleBg";

const Blog = () => {
  return (
    <Box
      sx={{
        margin: 0,
        backgroundColor: "#222831",
      }}
    >
      <Navbar />
      <ParticleBg />
      <h1>this is blog page</h1>
      <Box sx={{ height: "100vh", pt: "50px" }}>
        <h1 style={{ fontSize: "60px", color: "#fff" }}>Coming Soon</h1>
      </Box>
    </Box>
  );
};

export default Blog;
