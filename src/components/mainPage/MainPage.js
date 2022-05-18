import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {

    const navigate = useNavigate();

    return (

        <div className="app-container">
            <h2 className="app-container__description">Туристические точки притяжения Калиниграда</h2>
            <button className="app-container__btn" onClick={() => navigate('/mapbox-page')}>Перейти к карте</button>
        </div>

    )
}
