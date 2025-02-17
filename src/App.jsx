import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import HomePage from './screens/HomePage.jsx';
import NBA_API from './screens/NBA-API/NBA-API';
import LockedIn from './screens/LockedIn/LockedIn.jsx';
import { GraphDataProvider } from './screens/LockedIn/GraphDataContext';

function AnalyticsAndAPI() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-62M60FY37N');
    ReactGA.send({ hitType: 'pageview', page: location.pathname, title: document.title });

    // POST request to spin up the API
    fetch('https://nba-statistics-visualizer.onrender.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello World!',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <div className="App">
      <GraphDataProvider>
        <Router>
          <AnalyticsAndAPI />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nba-api" element={<NBA_API />} />
            <Route path="/locked-in" element={<LockedIn />} />
          </Routes>
        </Router>
      </GraphDataProvider>
    </div>
  );
}

export default App;
