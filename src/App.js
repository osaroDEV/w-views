import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Creators from './components/Creators'
import Downloads from './components/Downloads'
import Help from './components/Help'
import Howto from './components/Howto'
import TOS from './components/TOS'
import ContactUs from './components/Contactus'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
// import Footer from './components/Footer'
import Register from './components/Register'

function App() {
  return (
    <>
    {/* <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/creators'>Creators</Link>
        </li>
        <li>
          <Link to='/TOS'>TOS</Link>
        </li>
      </ul>
    </nav> */}
    <Header />
    <Routes>
      {/* <Header /> */}
      {/* <Switch> */}
      {/* <Home /> */}
      <Route path='/' element={<Home />}/>
      <Route path='/creators' element={<Creators />}/>
      <Route path='/downloads' element={<Downloads />}/>
      <Route path='/help' element={<Help />}/>
      <Route path='/howto' element={<Howto />}/>
      <Route path='/tos' element={<TOS />}/>
      <Route path='/contactus' element={<ContactUs />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>

    </Routes>
    <Footer />
    </>
  )
}

export default App;
