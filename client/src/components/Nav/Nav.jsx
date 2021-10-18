import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/JayWalkin-Logo.png";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="nav-link" to="/add-product">
      Add Product
    </NavLink>
    <NavLink className="nav-link" to="/change-password">
      Change Password
    </NavLink>
    <NavLink className="nav-link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="nav-link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="nav-link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="nav-link" to="/products">
      Products
    </NavLink>
  </>
);

const alwaysOptionsMobile = (
  <>
      <NavLink className="nav-mobile-link" to="/products">
        <ListItemText primary={"Products"} />
      </NavLink>
  </>
);

const authenticatedOptionsMobile = (
  <>
      <NavLink className="nav-mobile-link" to="/add-product">
        <ListItemText primary={"Add Product"} />
      </NavLink>
      <NavLink className="nav-mobile-link" to="/change-password">
        <ListItemText primary={"Change Password"} />
      </NavLink>
      <NavLink className="nav-mobile-link" to="/sign-out">
        <ListItemText primary={"Sign Out"} />
      </NavLink>
  </>
);

const unauthenticatedOptionsMobile = (
  <>
      <NavLink className="nav-mobile-link" to="/sign-up">
        <ListItemText primary={"Sign Up"} />
      </NavLink>

      <NavLink className="nav-mobile-link" to="/sign-in">
        <ListItemText primary={"Sign In"} />
      </NavLink>
  </>
);

export default function Nav({ user }) {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <div className="mobileNav">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {}}
        >
          <div className="drawer">
            <Box p={2} onClick={() => setOpen(false)} className="x">
              X
            </Box>
            <Divider />
            <Typography noWrap sx={{p: 2, fontWeight: "bolder"}}>
              {user && `Welcome, ${user.username}`}
            </Typography>
            <Box sx={{ px: 2 }}>
            <List>
              {alwaysOptionsMobile}
              {user ? authenticatedOptionsMobile : unauthenticatedOptionsMobile}
            </List>
            </Box>
            <Box sx={{ width: "250px", position: "fixed", bottom: 0}}>
              <Footer />
            </Box>
          </div>
        </Drawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink className="nav-logo-link" to="/">
            <img className="nav-logo-img" src={Logo} alt="logo" />
          </NavLink>
        </Typography>
        <div className="welcome-user-full-screen">
          <Typography noWrap sx={{ fontWeight: "bolder" }}>
            {user && `Welcome, ${user.username}`}
          </Typography>
        </div>
        <div className="nav-link">
        <Typography>
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
