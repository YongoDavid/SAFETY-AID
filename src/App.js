import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import DriverDetails from './pages/DriverDetails';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="black" color="white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver/:id" element={<DriverDetails />} />
        </Routes>
        <Navigation />
      </Box>
    </Router>
  );
}

export default App;