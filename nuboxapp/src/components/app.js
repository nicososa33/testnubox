import React from 'react';
import './app.css';
import logo from '../assets/logo.png';

//import AppComponent from './component/app'



function AppComponent() {
  return (
    <div className="container">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title"> Hello Nubox.</h1>
    </div>
  );
}

export default AppComponent;
