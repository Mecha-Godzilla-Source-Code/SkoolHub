import React, { useState } from 'react';
import './styles.css';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Calendar from './Task_list/Calendar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (

    <div className="navbar-container">
      <Router>
        {isLoggedIn ? (
          <>
            {/* <h1>SkoolHub</h1> */}
            <NavBar />
            <Routes>
              <Route path="/skoolhub/homepage" element={<h1>Homepage</h1>} />
              <Route path="/skoolhub/assignments" element={<h1>Assignments</h1>} />
              <Route path="/skoolhub/events" element={<Calendar />} />
              <Route path="/skoolhub/classes" element={<h1>Classes</h1>} />
              <Route path="/skoolhub/emails" element={<h1>Emails</h1>} />
              { // redrect if route doesn't match anything
              }
              <Route path="*" element={<Navigate to="/skoolhub/homepage" />} />
            </Routes>
          </>
        ) : (
          <div className="login-page">
            <h1 className="login-h1">SkoolHub</h1>
            <p className="login-p">Tedious out. Teaching in.</p>
            <Login onLogin={handleLogin} />
          </div>

        )}
      </Router>
    </div>

  );
}

export default App;
