import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ParticleBg from "../../Shared/Particale/ParticleBg";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#222831" }}>
      <ParticleBg />
      <Container
        sx={{
          pt: 30,
          pb: 15,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            sx={{
              backgroundColor: "#6a605926",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(255,255,255,0.1)",
            }}
            item
            xs={12}
            md={12}
          >
            <Typography
              sx={{ color: "#F58634", mt: 5 }}
              variant="h2"
              gutterBottom
              component="div"
            >
              Welcome,
            </Typography>
            <Typography
              sx={{ color: "#F58634" }}
              variant="h2"
              gutterBottom
              component="div"
            >
              I am <span style={{ color: "orangered" }}>Borhan Ahmed</span>
            </Typography>
            <Typography
              sx={{ color: "#F58634" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Full-Stack Developer — Tech Enthusiast — Hungry Learner....
            </Typography>
            <Typography
              sx={{ color: "#F58634", mb: 8 }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Available for — Internship/Full-Time Opportunities....|
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
