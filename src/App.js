import React from 'react';

import Header from './components/header/header';
import Index from './pages/index';
import Cta from './components/callToAction/cta'
import Footer from './components/footer/footer';


import './assets/css/main.css'

const App = () => (
  <div className="App">
    <Header />
    <Index />
    <Cta />
    <Footer />
  </div>
)


export default App;