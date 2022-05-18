import React from 'react';
import { useState, useEffect } from 'react';
import { LocationsList } from "./LocationsList.jsx";
import { GeoMap } from "./GeoMap.jsx";

export const MapboxPage = () => {
  const [popupParams, setPopupParams] = useState({ selected: null, visible: false })

  const showLocationInformation = (item, e) => {
    e && e.originalEvent.preventDefault();
    e && e.originalEvent.stopPropagation();
    item !== null
        ? setPopupParams( { selected: item, visible: true })
        : setPopupParams( { selected: null, visible: false })
  }

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setPopupParams( { selected: null, visible: false })
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      <header className='header-mapbox'>Туристические точки притяжения Калиниграда</header>
      <div className="main-container">
        <LocationsList changeSelectedLocation={showLocationInformation} />
        <GeoMap coordinates={popupParams} change={showLocationInformation} />
      </div>
    </>
  )
}
