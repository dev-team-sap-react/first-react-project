import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home';
import RawData from '../pages/RawData/RawData';
import Evaluation from '../pages/Evaluation/Evaluation';
import {ApexChart} from '../pages/ApexChart/ApexChart';


const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={ <Home/> } />
    <Route path='/rawData' element={ <RawData/> } />
    <Route path='/evaluation' element={ <Evaluation/> } />
    <Route path='/apexchart' element={ <ApexChart/> } />
   </Routes>
  );
};

export default Routers;