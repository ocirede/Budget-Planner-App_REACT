
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import AppMain from './Pages/AppMain';
import SignUp from "./Pages/Registration"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<AppMain />} />
        <Route path='/registration' element={<SignUp/>} />
      </Routes>
    </Router>
  );
};

export default App;

