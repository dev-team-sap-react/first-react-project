import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import RawData from '../pages/RawData/RawData';
import Evaluation from '../pages/Evalution/Evaluation';



const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={ <Home/> } />
    <Route path='/rawData' element={ <RawData/> } />
    <Route path='/evaluation' element={ <Evaluation/> } />
   </Routes>
  );
};

export default Routers;