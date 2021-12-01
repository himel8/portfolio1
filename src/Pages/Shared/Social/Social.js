import React from "react";

import { Box } from "@mui/system";

const Social = () => {
  return (
    <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
      <Box className="headerIcon">
        <div className="iconbox">
          <a href="https://github.com/himel8/">
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>GitHub</span>
          </a>
        </div>
        <div className="iconbox">
          <a href="https://www.linkedin.com/in/borhan-ahmed/">
            <div className="icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <span>Linkedin</span>
          </a>
        </div>
        <div className="iconbox">
          <a href="https://www.facebook.com/hshimel.khan.7/">
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
          </a>
        </div>
        <div className="iconbox">
          <a href="twitter.com">
            <div className="icon">
              <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </a>
        </div>
      </Box>
    </Box>
  );
};

export default Social;
