


import React from 'react';
import { Container, Typography, Button } from '@mui/material';

import TextField from '@mui/material/TextField';

const Main = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        justifyContent: 'center', // Fix the typo here
        height: '100%', // Use '100%' instead of '100vh'
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Centered Content
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>

      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
    </Container>
  );
};

export default Main;


























