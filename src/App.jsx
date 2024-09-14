import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen.jsx';
import NBA_API from './screens/NBA-API.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/nba-api" element={<NBA_API />} />
            </Routes>
        </Router>
    );
}

export default App;
