import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' , border :'1px solid rgba(0,0,0,0.1)' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="All" />
        <BottomNavigationAction label="Web Design"  />
        <BottomNavigationAction label="Front-end" />
        <BottomNavigationAction label="Back-End" />
      </BottomNavigation>
    </Box>
  );
}
