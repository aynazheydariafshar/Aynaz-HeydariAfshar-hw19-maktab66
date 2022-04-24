import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Section({title, handleClick}) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 , m:4}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ textAlign : 'center' }} variant="h5" component="div">
            {title}
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem 
                  secondaryAction={
                      <>
                        <IconButton edge="end" aria-label="delete" onClick={handleClick}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                      </>
                }
                >
                <ListItemText
                    primary="item"
                    secondary={secondary ? 'Secondary text' : null}
                    sx={{mr : 5}}
                />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}