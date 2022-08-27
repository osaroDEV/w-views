import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
// import Creators from './components/Creators'
// import Downloads from './components/Downloads'
// import Help from './components/Help'
// import Howto from './components/Howto'
// import TOS from './components/TOS'
// import ContactUs from './components/Contactus'

function App() {
  return (
    <Router>
      <Home />
      {/* <Creators /> */}
      {/* <Downloads /> */}
      {/* <Help /> */}
      {/* <Howto /> */}
      {/* <TOS /> */}
      {/* <ContactUs /> */}
    </Router>
  )
}

export default App;
