import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
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
    <ListItem button onClick={() => {}}>
      <NavLink className="nav-mobile-link" to="/products">
        <ListItemText primary={"Products"} />
      </NavLink>
    </ListItem>
  </>
);

const authenticatedOptionsMobile = (
  <>
    <ListItem button onClick={() => {}}>
      <NavLink className="nav-mobile-link" to="/add-product">
        <ListItemText primary={"Add Product"} />
      </NavLink>
    </ListItem>
    <ListItem button onClick={() => {}}>
      <NavLink className="nav-mobile-link" to="/change-password">
        <ListItemText primary={"Change Password"} />
      </NavLink>
    </ListItem>
    <ListItem button onClick={() => {}}>
      <NavLink className="nav-mobile-link" to="/sign-out">
        <ListItemText primary={"Sign Out"} />
      </NavLink>
    </ListItem>
  </>
);

const unauthenticatedOptionsMobile = (
  <>
    <ListItem button onClick={() => {}}>
      <NavLink className="nav-mobile-link" to="/sign-up">
        <ListItemText primary={"Sign Up"} />
      </NavLink>
    </ListItem>

    <ListItem button onClick={() => {}}>
      <NavLink className="nav-mobile-link" to="/sign-in">
        <ListItemText primary={"Sign In"} />
      </NavLink>
    </ListItem>
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
            <List>
              {alwaysOptionsMobile}
              {user ? authenticatedOptionsMobile : unauthenticatedOptionsMobile}
            </List>
          </div>
        </Drawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink className="nav-logo-link" to="/">
            <img className="nav-logo-img" src={Logo} alt="logo" />
          </NavLink>
        </Typography>
        <Typography>
          {user && `Welcome, ${user.username.substring(0, 9)}`}
        </Typography>
        <div className="nav-link">
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </Toolbar>
    </AppBar>
  );
}
