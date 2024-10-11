import React from 'react';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const StatusCard = ({ count, title, image }) => {
  return (
    <div>
        <div style={{width:"100%",borderRadius:"20px", backgroundColor:"white",display:"flex", alignItems:"center"}}>
      <Avatar sx={{ bgcolor: "#8980F61A", width: 56, height: 56 ,marginLeft:"10px"}}>
          <img src={image} alt='Avatar' style={{ width: '70%', height: '60%' }} />
        </Avatar>

        <CardContent sx={{ flex: 1 }}>
          <Typography style={{fontFamily:"Montserrat",fontWeight:700, fontSize:"36px"}}>
            {count}
          </Typography>
          <Typography style={{fontFamily:"Montserrat",fontWeight:400, fontSize:"16px", color:"#777777"}}sx={{ mb: 1.5 }}>
            {title}
          </Typography>
        </CardContent>
        </div>
    </div>
  );
};

export default StatusCard;
