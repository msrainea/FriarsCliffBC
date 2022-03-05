import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './styles/styles.css';
import Header from './constants/header';
import Footer from './constants/footer';
import Home from './pages/home';
import Dates from './pages/dates';
import Beach from './pages/beach';
import Info from './pages/info';
import Stats from './pages/stats';
import Team from './pages/team';
import ContactForm from './pages/contact';
import Privacy from './pages/privacy';
import Cookies from './pages/cookies';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path = "/" exact element={<Home />} />
          <Route path = "/dates" element={<Dates />} />
          <Route path = "/beach" element={<Beach />} />
          <Route path = "/info" element={<Info />} />
          <Route path = "/stats" element={<Stats />} />
          <Route path = "/team" element={<Team />} />
          <Route path = "/contact" element={<ContactForm />} />
          <Route path = "/privacy" element={<Privacy />} />
          <Route path = "/cookies" element={<Cookies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


