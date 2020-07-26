import React from 'react';
import logo from '../../assets/img/logo-papirDoc.svg'

import './style.css'


const Footer = () => (
    <footer className="container">
         <img src={logo} alt="Logo papirDoc"></img>
         <span>v 1.0.1</span>
    </footer>
)

export default Footer;