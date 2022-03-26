import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

const MainHome = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/home' element={<MainHome />} />
      </Routes>
    </Router>
  );
};

export default App;
