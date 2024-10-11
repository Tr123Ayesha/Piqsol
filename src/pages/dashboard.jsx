import React from "react";
import Sidebar from "../components/sidebar";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CustomSwitch from "../components/customSwitch";
import { Outlet } from "react-router-dom";
const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props; 
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const drawer = (
        <Sidebar /> 
    );

    return (
        <Box sx={{ display: 'flex' }}>
                 <CssBaseline />
      <AppBar
         position="fixed"
         sx={{
          backgroundColor: '#E7E7E7',
          color: 'black',
           boxShadow: 'none',
           width: { sm: `calc(100% - ${drawerWidth}px)` },
           ml: { sm: `${drawerWidth}px` },
          border: 'none',
           padding: 0,
         }}
         >
         <Toolbar>
          <IconButton
           aria-label="open drawer"
            edge="start"
             onClick={handleDrawerToggle}
             sx={{ mr: 2, display: { sm: 'none' } }}
           >
            <MenuIcon />
         </IconButton>
          <Outlet />
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center',marginTop:'5%', justifyContent: 'space-between', padding: '40 16px' }}>
       
          <Typography className="user-dashboard-title">User Dashboard</Typography> {/* Apply the class here */}
        <CustomSwitch  className="Switch"
        checked={checked}
         onChange={handleChange}
         inputProps={{ 'aria-label': 'custom switch' }}
       />
       </Box>
         </Toolbar>
       </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={window !== undefined ? () => window().document.body : undefined}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography sx={{ marginBottom: 2 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua...
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                    Consequat mauris nunc congue nisi vitae suscipit...
                </Typography>
            </Box>
        </Box>
    );
};

export default Dashboard;
