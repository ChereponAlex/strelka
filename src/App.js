import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/mainPage/MainPage';
import { MapboxPage } from './components/mapboxPage/MapboxPage';
import { BrowserRouter } from 'react-router-dom'
import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mapbox-page' element={<MapboxPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;