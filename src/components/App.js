import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './mainPage/MainPage';
import { MapboxPage } from './mapboxPage/MapboxPage';
import '../public/scss/main.scss';

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
