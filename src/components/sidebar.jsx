import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarIcon from '@mui/icons-material/Star'; // Example icon for "Starred"
import SendIcon from '@mui/icons-material/Send'; // Example icon for "Send email"
import AllInboxIcon from '@mui/icons-material/AllInbox'; // Example icon for "All mail"
import DeleteIcon from '@mui/icons-material/Delete'; // Example icon for "Trash"
import SpamIcon from '@mui/icons-material/Report'; // Example icon for "Spam"

const Sidebar = () => {

  const sidebarItems = [
    { text: 'Inbox', icon: <InboxIcon />, route: '/Inbox' },
    { text: 'Starred', icon: <StarIcon />, route: '/Starred' },
    { text: 'Send email', icon: <SendIcon />, route: '/send-email' },
    { text: 'All mail', icon: <AllInboxIcon />, route: '/all-mail' },
    { text: 'Trash', icon: <DeleteIcon />, route: '/trash' },
    { text: 'Spam', icon: <SpamIcon />, route: '/spam' },
  ];

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sidebarItems.map(({ text, icon, route }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={route}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
