import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
// import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import AvatarTestingPage from './components/pages/AvatarTestingPage';

function App() {
  return (
    <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={AvatarTestingPage} />
    </div>
  </Router>
  );
}

export default App;
