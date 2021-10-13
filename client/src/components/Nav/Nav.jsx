import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/JayWalkin-Logo.png';

import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Product
    </NavLink>
    <NavLink className="link" to="/change-password">
      Change Password
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
    <>
        <NavLink className="link" to="/products">Products</NavLink>
    </>
)

const alwaysOptionsMobile = (
    <>
    <ListItem button onClick={() => {}}>
        <NavLink to='/products'>
            <ListItemText primary={"Products"} />
        </NavLink>
    </ListItem>
    </>
)

const authenticatedOptionsMobile = (
    <>
    <ListItem button onClick={() => {}}>
        <NavLink to="/add-product">
            <ListItemText primary={"Add Product"} />
        </NavLink>
        </ListItem>
    <ListItem button onClick={() => {}}>
        <NavLink to="/change-password">
            <ListItemText primary={"Change Password"} />
        </NavLink>
        </ListItem>
    <ListItem button onClick={() => {}}>
        <NavLink to="/sign-out">
            <ListItemText primary={"Sign Out"} />
        </NavLink>
    </ListItem>
    
    </>
)

const unauthenticatedOptionsMobile = (
    <>
    <ListItem button onClick={() => {}}>

        <NavLink to="/sign-up">
            <ListItemText primary={"Sign Up"} />
        </NavLink>
        </ListItem>

    <ListItem button onClick={() => {}}>
        <NavLink to="/sign-in">
            <ListItemText primary={"Sign In"} />
        </NavLink>
        </ListItem>
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

              <div className="drawer">
                  <Box textAlign="left" p={2}
                  onClick={() => setOpen(false)}
                  className="x"
                  >X</Box>
                  <Divider />
                  <List>
                      
                      
                          {alwaysOptionsMobile}
                          {user ? authenticatedOptionsMobile : unauthenticatedOptionsMobile}
                     
                    
                  </List>
              </div>
          </Drawer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink className="logo" to="/"><img src={Logo} alt="logo"/></NavLink>
          </Typography>
          <div className="links">
            {user && (
              <div className="link-welcome">Welcome, {user.username}</div>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import "./Nav.css";

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Logo from '../../assets/JayWalkin-Logo.png';

// import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

// const authenticatedOptions = (
//     <>
//         <NavLink className="link" to="/add-product">Add Product</NavLink>
//         <NavLink className="link" to="/change-password">Change Password</NavLink>
//         <NavLink className="link" to="/sign-out">Sign Out</NavLink>
//     </>
// )

// const unauthenticatedOptions = (
//     <>
//         <NavLink className="link" to="/sign-up">Sign Up</NavLink>
//         <NavLink className="link" to="/sign-in">Sign In</NavLink>
//     </>
//     )

// const alwaysOptions = (
//     <>
//         <NavLink className="link" to="/products">Products</NavLink>
//     </>
// )

// const alwaysOptionsMobile = (
//     <>
//     <ListItem button onClick={() => {}}>
//         <NavLink to='/products'>
//             <ListItemText primary={"Products"} />
//         </NavLink>
//     </ListItem>
//     </>
// )

// const authenticatedOptionsMobile = (
//     <>
//     <ListItem button onClick={() => {}}>
//         <NavLink to="/add-product">
//             <ListItemText primary={"Add Product"} />
//         </NavLink>
//         </ListItem>
//     <ListItem button onClick={() => {}}>
//         <NavLink to="/change-password">
//             <ListItemText primary={"Change Password"} />
//         </NavLink>
//         </ListItem>
//     <ListItem button onClick={() => {}}>
//         <NavLink to="/sign-out">
//             <ListItemText primary={"Sign Out"} />
//         </NavLink>
//     </ListItem>
    
//     </>
// )

// const unauthenticatedOptionsMobile = (
//     <>
//     <ListItem button onClick={() => {}}>

//         <NavLink to="/sign-up">
//             <ListItemText primary={"Sign Up"} />
//         </NavLink>
//         </ListItem>

//     <ListItem button onClick={() => {}}>
//         <NavLink to="/sign-in">
//             <ListItemText primary={"Sign In"} />
//         </NavLink>
//         </ListItem>
//     </>
//     )

// export default function Nav({ user }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" color="inherit">
//         <Toolbar>
//             <div className="mobileNav">
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={() => setOpen(true)}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           </div> 

//           <Drawer
//           anchor="left"
//           open={open}
//           onClose={() => setOpen(false)}
//           onOpen={() => {}}
//           >
//               <div className="drawer">
//                   <Box textAlign="left" p={2}
//                   onClick={() => setOpen(false)}
//                   className="x"
//                   >X</Box>
//                   <Divider />
//                   <List>
                      
                      
//                           {alwaysOptionsMobile}
//                           {user ? authenticatedOptionsMobile : unauthenticatedOptionsMobile}
                     
                    
//                   </List>
//               </div>
//           </Drawer>

//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <NavLink className="logo" to="/"><img src={Logo} alt="logo"/></NavLink>
//           </Typography>
//           <div className="links">
//                     {user && <div className="link-welcome">Welcome, {user.username}</div>}
//                     {alwaysOptions}
//                     {user ? authenticatedOptions : unauthenticatedOptions}
//                 </div>
//         </Toolbar>
//         </AppBar>
//         </Box>
//     )
// }
