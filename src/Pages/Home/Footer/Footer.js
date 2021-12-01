import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Social from "../../Shared/Social/Social";

const Footer = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Divider sx={{ mb: 3, height: "1px", backgroundColor: "orangered" }} />
      <Typography
        sx={{ color: "#fff", mb: 0 }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Borhan Ahmed
      </Typography>
      <Social />
      <Typography
        sx={{ color: "#FFD460" }}
        variant="subtitle2"
        gutterBottom
        component="div"
      >
        © Copyright — 2021 — by Boarhan Ahmed
      </Typography>
    </Box>
  );
};

export default Footer;
