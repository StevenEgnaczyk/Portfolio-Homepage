import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage.jsx'
import NBA_API from './screens/NBA-API';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/nba-api" element={<NBA_API/>}/>
        </Routes>
    </Router>
  )
}

export default App