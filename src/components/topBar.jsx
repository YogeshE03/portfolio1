import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useContext } from "react";
import { appContext } from "../App";

export default function TopBar() {
  const navigate = useNavigate();
  const { appMode, setAppMode } = useContext(appContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            className="titleName"
            sx={{ flexGrow: 1 }}
            style={{ textAlign: "left" }}
          >
           YOGESH E
          </Typography>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            Home
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() =>  navigate("/about")}
          >
            About
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() =>  navigate("/Skills")}
          >
            Skills
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() =>  navigate("/education")}
          >
            Education
          </IconButton>

         
         

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1BCwnGFV3d7IHBWsmEIY8uyHT7g0qbjbl/view",
                "_blank"
              )
            }
          >
            Resume
          </IconButton>

          { <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Mode"
            sx={{ mr: 2 }}      
            style={{marginLeft:"auto"}}    
            onClick = { ()=> setAppMode(appMode === 'dark' ? 'light':'dark')}
          >
            {appMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
          </IconButton> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}