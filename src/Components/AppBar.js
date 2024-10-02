import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AppBarr = () => {
  const [showWords, setShowWords] = useState(false);
  const handleToggle = () => {
    setShowWords(!showWords); // Toggle the display of the words
  };
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="relative">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 7 }}
            >
              <MenuIcon onClick={handleToggle} />
              {showWords && (
                <Container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Col style={{ paddingLeft: "2rem" }}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                  
                      HOME
                    </Link>
                  </Col>
                  <Col style={{ paddingLeft: "2rem" }}>
                    <Link
                      to="/learn"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                  
                      LEARN
                    </Link>
                  </Col>
                  <Col style={{ paddingLeft: "2rem" }}>
                
                    <Link
                      to="/leader"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                  
                      LEADER
                    </Link>
                  </Col>
                  <Col style={{ paddingLeft: "2rem" }}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                    
                     HELP
                    </Link>
                  </Col>
                </Container>
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AppBar;
