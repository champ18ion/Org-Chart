import React, { useState } from 'react';
import './style.css';
import data from './data';
import OrganizationalChart from './OrganizationalChart';

const App = () => {
  const [chartVisible, setChartVisible] = useState(true);

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="navbar-title">Organizational Chart App</h1>
        <button
          className="toggle-button"
          onClick={() => setChartVisible(!chartVisible)}
        >
          Toggle Chart
        </button>
      </nav>
      <div className="content-container">
        {chartVisible && (
          <div className="chart-container">
            <OrganizationalChart employees={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
