import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MissionPage from './routes/MissionPage'
import ContactPage from './routes/ContactPage'

import ALCOHOL from './routes/ALCOHOL';
import OPIOID from './routes/OPIOID';
import OS from './routes/OtherSubstances';

import WWS from './routes/WhereWeServePage';
import LosAngeles from './routes/LosAngelesPage'

import EmploymentPage from './routes/EmploymentPage';
import TransitionalHousingPage from './routes/TransitionalHousingPage';

import OthersPage from './routes/OthersPage'
import About from './routes/AboutPage';
import Faq from './routes/FaqPage';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/opioid' element={<OPIOID />} />
      <Route exact path='/other-substances' element={<OS />} />

      <Route exact path='/employment' element={<EmploymentPage />} />
      <Route exact path='/transitional-housing' element={<TransitionalHousingPage />} />

      <Route exact path='/where-we-serve' element={<WWS />} />
      <Route exact path='/los-angeles' element={<LosAngeles />} />

      <Route exact path='/other-resources' element={<OthersPage />} />
      <Route exact path='/about-us' element={<About />} />
      <Route exact path='/faq' element={<Faq />} />

      <Route exact path='/our-mission' element={<MissionPage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

