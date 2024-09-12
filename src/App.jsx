import React, { useState } from 'react';

import HomeScreen from './screens/HomeScreen.jsx';
import APIScreen from './screens/NBA-API.jsx';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('Home');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
    };

    return (
        <>
            {currentScreen === 'Home' && <HomeScreen handleNavigation={handleNavigation} />}
            {currentScreen === 'API' && <APIScreen handleNavigation={handleNavigation} />}
        </>
    );
}

export default App;
