import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { ReactGA } from 'react-ga4';
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from './screens/HomePage.jsx';
import NBA_API from './screens/NBA-API/NBA-API';
import LockedIn from './screens/LockedIn/LockedIn.jsx';
import { GraphDataProvider } from './screens/LockedIn/GraphDataContext'; // Import your GraphDataProvider

function App() {
  useEffect(() => {

    const location = useLocation();

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

  return (
    <div className="App">
      <Analytics />
      <SpeedInsights />
      <GraphDataProvider> {/* Wrap your routes with the provider */}
        <Router>
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
