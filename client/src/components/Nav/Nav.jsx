import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const authenticatedOptions = (
    <>
        <NavLink className="link" to="/add-product">Add Product</NavLink>
        <NavLink className="link" to="/change-password">Change Password</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)

const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up</NavLink>
        <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
    )

const alwaysOptions = (
    <>
        <NavLink className="link" to="/products">Products</NavLink>
    </>
)


export default function Nav({ user }) {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
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
              <div className="test">
                  <Box textAlign="left" p={2}
                  onClick={() => setOpen(false)}
                  className="x"
                  >X</Box>
                  <Divider />
                  <List>
                      
                      <ListItem button onClick={() => {}}>
                          <NavLink to='/products'>
                          <ListItemText primary={"Products"} />
                          </NavLink>
                      </ListItem>
                      
                      <ListItem button onClick={() => {}}>
                          <NavLink to='/sign-in'>
                          <ListItemText primary={"Sign In"} />
                          </NavLink>
                      </ListItem>
                      <ListItem button onClick={() => {}}>
                          <NavLink to='/sign-up'>
                          <ListItemText primary={"Sign Up"} />
                          </NavLink>
                      </ListItem>
                    
                  </List>
              </div>
          </Drawer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink className="logo" to="/">JayWalkin</NavLink>
          </Typography>
          <div className="links">
                    {user && <div className="link-welcome">Welcome, {user.username}</div>}
                    {alwaysOptions}
                    {user ? authenticatedOptions : unauthenticatedOptions}
                </div>
        </Toolbar>
        </AppBar>
        </Box>
    )
}
