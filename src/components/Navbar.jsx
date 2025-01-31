import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles Hamburger menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "linear-gradient(135deg, #144987, #1e73c3)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, sm: 3 } }}>
          
          <Typography variant="h6" fontWeight="bold">
            EventMaster
          </Typography>

          {/* Mobile Navigation Toggle */}
          <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={toggleMenu}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>

          {/* Navigation Links for Desktop/Laptop(Larger) Screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button component={Link} to="/" sx={{ color: "white", fontSize: "1rem", fontWeight: "500", "&:hover": { color: "#ffcc00" } }}>Home</Button>
            <Button component={Link} to="/events" sx={{ color: "white", fontSize: "1rem", fontWeight: "500", "&:hover": { color: "#ffcc00" } }}>Events</Button>
            <Button component={Link} to="/register" sx={{ color: "white", fontSize: "1rem", fontWeight: "500", "&:hover": { color: "#ffcc00" } }}>Register</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
        <List sx={{ width: 200 }}>
          {["Home", "Events", "Register"].map((text, idx) => (
            <ListItem button key={idx} component={Link} to={`/${text.toLowerCase()}`} onClick={toggleMenu}>
              <ListItemText primary={text} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavigationBar;
