// src/App.js
import React from 'react';
import './App.css';
import { Container, Typography } from '@mui/material';
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Our Map
        </Typography>
        <GoogleMap />
      </Container>
    </div>
  );
}

export default App;
