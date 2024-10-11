import { Switch } from '@mui/material';
import { styled } from '@mui/system';
import sun from "./../assets/sun.svg";

// Custom Switch styling
const CustomSwitch = styled(Switch)(() => ({
  width: 100,
  height: 40,
  padding: 0, // Remove padding to allow full movement of the thumb
  position: 'relative', // Add relative positioning to track the thumb correctly
  '& .MuiSwitch-switchBase': {
    padding: 2, // Ensure the thumb has space to move
    top: 3, // Ensure the thumb starts at the top of the track
    '&.Mui-checked': {
      transform: 'translateX(60px)', // Moves the thumb fully to the right
    },
  },
  '& .MuiSwitch-thumb': {
    width: 30,
    height: 30,
    backgroundColor: '#EAE32D', 
    transition: 'background-color 0.3s ease, transform 0.3s ease', 
  },
  '& .MuiSwitch-track': {
    borderRadius: 50,
    backgroundImage: `url(${sun})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 1, 
    height: '100%', 
    boxSizing: 'border-box', 
    backgroundColor:'Transparent',
  },
  '&.Mui-checked .MuiSwitch-track': {
    backgroundColor: 'Transparent', 
  },
}));

export default CustomSwitch;
