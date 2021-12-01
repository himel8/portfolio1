import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import camera from "../../../image/React-App.png";
import hospital from "../../../image/Health-Care-Hospital.png";

const Services = () => {
  return (
    <Container sx={{ pt: 15 }} id="project">
      <Typography
        sx={{ color: "orangered" }}
        variant="h6"
        gutterBottom
        component="div"
      >
        MY WORKS
      </Typography>
      <Typography
        sx={{ color: "#FFD460" }}
        variant="h2"
        gutterBottom
        component="div"
      >
        Have a look at some of my previous works
      </Typography>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                height: "300px",
                backgroundImage: `url(${camera})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Box className="projectdetail">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Capture Zone — a Full Stack Website
                  </Typography>
                  <CardActions>
                    <a href="https://camera-shop-9b3ae.web.app/">
                      <Button size="small">Live site</Button>
                    </a>
                    <a href="https://github.com/himel8/Camera_shop">
                      <Button size="small">Code Link</Button>
                    </a>
                  </CardActions>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                height: "300px",
                backgroundImage: `url(${hospital})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Box className="projectdetail">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Health care — a Full Stack Website
                  </Typography>
                  <CardActions>
                    <a href="https://my-hospital-87f64.web.app/">
                      <Button size="small">Live site</Button>
                    </a>
                    <a href="https://github.com/himel8/health_care">
                      <Button size="small">Code Link</Button>
                    </a>
                  </CardActions>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                height: "300px",
                backgroundImage: `url(${camera})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Box className="projectdetail">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Capture Zone — a Full Stack Website
                  </Typography>
                  <CardActions>
                    <a href="https://camera-shop-9b3ae.web.app/">
                      <Button size="small">Live site</Button>
                    </a>
                    <a href="https://github.com/himel8/Camera_shop">
                      <Button size="small">Code Link</Button>
                    </a>
                  </CardActions>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Services;
