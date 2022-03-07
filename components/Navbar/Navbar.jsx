import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontFamily: "Bebas Neue",
              color: "#66ffb3",
              cursor: "pointer",
            }}
          >
            Popflix
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faBarsStaggered} color="#66ffb3" />
            </IconButton>
          </Box>
          <Box sx={{ ml: 1 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://www.mdcleaners.com/wp-content/uploads/2016/11/nouser-1.jpg"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
