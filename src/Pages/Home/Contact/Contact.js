import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "@formspree/react";
import { Box } from "@mui/system";

import Social from "../../Shared/Social/Social";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqnjzwp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Container id="contact" sx={{ pt: 15 }}>
      <Typography
        sx={{ color: "#FFD460" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Contact Me
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <form className="contactForm" onSubmit={handleSubmit}>
              <input placeholder="name" id="name" type="text" name="name" />
              <input type="email" placeholder="email" id="email" name="email" />
              <input
                type="text"
                placeholder="subject"
                id="subject"
                name="subject"
              />

              <textarea
                placeholder="message"
                rows="6"
                id="message"
                name="message"
              />
              <input
                className="contactBtn"
                type="submit"
                disabled={state.submitting}
              />
            </form>
          </Grid>
          <Grid sx={{ textAlign: "left" }} item xs={12} md={5}>
            <Typography
              sx={{ color: "#FFD460" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Address
            </Typography>

            <Typography
              sx={{ color: "orangered" }}
              variant="p"
              gutterBottom
              component="div"
            >
              Uttarkhan, Uttara, Dhaka-1230, Bangladesh
            </Typography>

            <Typography
              sx={{ color: "#FFD460" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Email
            </Typography>
            <a
              style={{ textDecoration: "none" }}
              href="mailto:borhanahmedhimel@gmail.com"
            >
              <Typography
                sx={{ color: "orangered" }}
                variant="p"
                gutterBottom
                component="div"
              >
                borhanahmedhimel@gmail.com
              </Typography>
            </a>
            <Typography
              sx={{ color: "#FFD460" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Phone
            </Typography>
            <a style={{ textDecoration: "none" }} href="tel:+88-01516-097150">
              <Typography
                sx={{ color: "orangered" }}
                variant="p"
                gutterBottom
                component="div"
              >
                +88 01516 097150
              </Typography>
            </a>
            <Typography
              sx={{ color: "#FFD460" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Follow Me
            </Typography>
            <Social />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
