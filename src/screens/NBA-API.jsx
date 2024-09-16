import React, { useState } from 'react';
import './NBA-API.css'; // Import the CSS file
import PlaceHolder_Image from '../assets/Projects/NBA API/PlaceHolder_Image.png'; // Import the placeholder image
const NBA_API = () => {
  const [team, setTeam] = useState('Atlanta Hawks');
  const [stat1, setStat1] = useState('Points');
  const [stat2, setStat2] = useState('Points');
  const [imageSrc, setImageSrc] = useState(PlaceHolder_Image); // Default placeholder image
  const [loading, setLoading] = useState(false); // Track loading state
  const [progress, setProgress] = useState(0); // Track progress for progress bar

  // Replace with your Render endpoint URL
  const API_URL = 'https://nba-statistics-visualizer.onrender.com/submit';

  const handleSubmit = () => {
    setLoading(true);
    setProgress(0); // Reset progress
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        team: team,
        stat1: stat1,
        stat2: stat2,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
        setLoading(false); // Remove loading state
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
        setLoading(false); // Ensure loading state is removed on error
      });
  };

  return (
    <div className="nba-api-page">
      <div className="nba-api-container">
        <h1>NBA Stat Visualizer</h1>
        <p className="nba-api-description">
          This NBA Stat Visualizer allows you to select any NBA team and two statistics
          to compare. Once you make your selections, the program generates a visualization
          based on the data. Click 'Submit' and wait for the visual representation of the selected stats.
        </p>
        
        <div className="nba-api-dropdown-container">
          <div className="nba-api-dropdown">
            <label htmlFor="teams" className="nba-api-label">Select NBA Team:</label>
            <select
              id="teams"
              className="nba-api-select"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            >
              <option value="Atlanta Hawks">Atlanta Hawks</option>
              <option value="Boston Celtics">Boston Celtics</option>
              <option value="Brooklyn Nets">Brooklyn Nets</option>
              <option value="Charlotte Hornets">Charlotte Hornets</option>
              <option value="Chicago Bulls">Chicago Bulls</option>
              <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
              <option value="Dallas Mavericks">Dallas Mavericks</option>
              <option value="Denver Nuggets">Denver Nuggets</option>
              <option value="Detroit Pistons">Detroit Pistons</option>
              <option value="Golden State Warriors">Golden State Warriors</option>
              <option value="Houston Rockets">Houston Rockets</option>
              <option value="Indiana Pacers">Indiana Pacers</option>
              <option value="LA Clippers">LA Clippers</option>
              <option value="Los Angeles Lakers">Los Angeles Lakers</option>
              <option value="Memphis Grizzlies">Memphis Grizzlies</option>
              <option value="Miami Heat">Miami Heat</option>
              <option value="Milwaukee Bucks">Milwaukee Bucks</option>
              <option value="Minnesota Timberwolves">Minnesota Timberwolves</option>
              <option value="New Orleans Pelicans">New Orleans Pelicans</option>
              <option value="New York Knicks">New York Knicks</option>
              <option value="Oklahoma City Thunder">Oklahoma City Thunder</option>
              <option value="Orlando Magic">Orlando Magic</option>
              <option value="Philadelphia 76ers">Philadelphia 76ers</option>
              <option value="Phoenix Suns">Phoenix Suns</option>
              <option value="Portland Trail Blazers">Portland Trail Blazers</option>
              <option value="Sacramento Kings">Sacramento Kings</option>
              <option value="San Antonio Spurs">San Antonio Spurs</option>
              <option value="Toronto Raptors">Toronto Raptors</option>
              <option value="Utah Jazz">Utah Jazz</option>
              <option value="Washington Wizards">Washington Wizards</option>
            </select>
          </div>

          <div className="nba-api-dropdown">
            <label htmlFor="stat1" className="nba-api-label">Select Statistic 1:</label>
            <select
              id="stat1"
              className="nba-api-select"
              value={stat1}
              onChange={(e) => setStat1(e.target.value)}
            >
              <option value="Points">Points</option>
              <option value="Field Goals Made">Field Goals Made</option>
              <option value="Field Goals Attempted">Field Goals Attempted</option>
              <option value="Field Goal Percentage">Field Goal Percentage</option>
              <option value="3 Pointers Made">3 Pointers Made</option>
              <option value="3 Pointers Attempted">3 Pointers Attempted</option>
              <option value="3-Point Percentage">3-Point Percentage</option>
              <option value="Free Throws Made">Free Throws Made</option>
              <option value="Free Throws Attempted">Free Throws Attempted</option>
              <option value="Free Throw Percentage">Free Throw Percentage</option>
              <option value="Offensive Rebounds">Offensive Rebounds</option>
              <option value="Defensive Rebounds">Defensive Rebounds</option>
              <option value="Rebounds">Rebounds</option>
              <option value="Assists">Assists</option>
              <option value="Steals">Steals</option>
              <option value="Blocks">Blocks</option>
              <option value="Turnovers">Turnovers</option>
              <option value="Personal Fouls">Personal Fouls</option>
            </select>
          </div>

          <div className="nba-api-dropdown">
            <label htmlFor="stat2" className="nba-api-label">Select Statistic 2:</label>
            <select
              id="stat2"
              className="nba-api-select"
              value={stat2}
              onChange={(e) => setStat2(e.target.value)}
            >
              <option value="Points">Points</option>
              <option value="Field Goals Made">Field Goals Made</option>
              <option value="Field Goals Attempted">Field Goals Attempted</option>
              <option value="Field Goal Percentage">Field Goal Percentage</option>
              <option value="3 Pointers Made">3 Pointers Made</option>
              <option value="3 Pointers Attempted">3 Pointers Attempted</option>
              <option value="3-Point Percentage">3-Point Percentage</option>
              <option value="Free Throws Made">Free Throws Made</option>
              <option value="Free Throws Attempted">Free Throws Attempted</option>
              <option value="Free Throw Percentage">Free Throw Percentage</option>
              <option value="Offensive Rebounds">Offensive Rebounds</option>
              <option value="Defensive Rebounds">Defensive Rebounds</option>
              <option value="Rebounds">Rebounds</option>
              <option value="Assists">Assists</option>
              <option value="Steals">Steals</option>
              <option value="Blocks">Blocks</option>
              <option value="Turnovers">Turnovers</option>
              <option value="Personal Fouls">Personal Fouls</option>
            </select>
          </div>
        </div>
        
        {/* Conditionally render the progress bar or image */}
        {loading ? (
          <div className="nba-api-progress-container">
            <div className="nba-api-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        ) : (
          <img src={imageSrc} alt="Visualization" className="nba-api-placeholder-image" />
        )}

        <button
          className="nba-api-submit-btn"
          onClick={handleSubmit}
          disabled={loading} // Disable button during loading
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NBA_API;
