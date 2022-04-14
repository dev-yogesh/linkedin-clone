import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { getUserAuth } from './actions';

const MainHome = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/home' element={<MainHome />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
