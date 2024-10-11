import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Logo from "../assets/Logo.svg";
import { Typography } from '@mui/material';
import backToHome from "../assets/backToHome.svg";
import myEvents from "../assets/myEvents.svg";
import pendingEvents from "../assets/pendingEvents.svg";
import pastEvents from "../assets/pastEvents.svg";
import upcomingEvents from "../assets/upcomingEvents.svg";
import {Collapse} from '@mui/material';
import approvedEvents from '../assets/approvedEvents.svg';
import tickets from "../assets/tickets.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import "./sidebar.css";
const Sidebar = () => {
  const [openEvents, setOpenEvents] = useState(false);

  const sidebarItems = [
    { text: 'Pending Events', icon: pendingEvents, route: '/Inbox' },
    { text: 'Approved Events', icon: approvedEvents, route: '/Starred' },
    { text: 'Upcoming Events', icon: upcomingEvents, route: '/send-email' },
    { text: 'Past Events', icon: pastEvents, route: '/all-mail' },
    // { text: 'Trash', icon: <DeleteIcon />, route: '/trash' },
    // { text: 'Spam', icon: <SpamIcon />, route: '/spam' },
  ];
  const handleEventsClick = () => {
    setOpenEvents(!openEvents);
  };
  return (
    <div>
      <Toolbar />
      <div className="logo-container">
        <img src={Logo} alt="Piqsol Logo" className="logo-image" />
        <p className="logo-text">piqsol</p>
      </div>
      <div className='backtoHome'>
        <img src={backToHome} alt="Back to Home Icon" className="back-home-icon" />
        <Typography className="back-to-home-text">Back to Home</Typography>
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleEventsClick}>
            <ListItemIcon>
              <img src={myEvents} alt="My Events Icon" className="myEvent-icon" />
            </ListItemIcon>
            <ListItemText 
              sx={{
                fontFamily: 'Montserrats',
                fontWeight: 400,
                fontSize: '14px'
              }}
              primary="My Events"
            />
          </ListItemButton>
        </ListItem>
        <Collapse in={openEvents} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
          {sidebarItems.map(({ text, icon, route }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={route}>
              <ListItemIcon>
              <img src={icon} alt={`${text} Icon`} className="event-icon" /> {/* Render the image */}
                 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
          </List>
      </Collapse>
      <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <img src={tickets} alt="TicketIcon" className="TicketIcon" />
            </ListItemIcon>
            <ListItemText primary="My Tickets" />
           
          </ListItemButton>
        </ListItem>
      <ListItem button  sx={{  marginTop: "100%" }}>
  <LogoutIcon sx={{ marginRight: 1, width:" 15px",
    height: "14px" }} />
  <ListItemText primary="Logout" />
</ListItem>
     </List>
    </div>
  );
};

export default Sidebar;
