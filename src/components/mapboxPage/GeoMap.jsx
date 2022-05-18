import React from 'react';
import { useState } from 'react';
import points from '../../points/points.js'
import Map, { Marker } from 'react-map-gl';
import { ToolTip } from "./ToolTip.jsx";

export const GeoMap = (props) => {
    const [lng, setLng] = useState(20.50780119457183);
    const [lat, setLat] = useState(54.71463777838371);

    return (
        <div className="main-container__map">
            <Map
                mapboxAccessToken={'pk.eyJ1IjoidGVlZW1zaSIsImEiOiJjbDM5enEzN2QwMDc4M2ZtaHcyN2duZG1sIn0.na90ROQ6CiSYSktFogKyvw'}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom: 10
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/teeemsi/cl3a28sdw001914ll1a6tdej2"
            >
                {
                    points.features.map((mark, index) =>
                    (<Marker
                        key={index + 1}
                        longitude={mark.geometry.coordinates[0]}
                        latitude={mark.geometry.coordinates[1]}
                        onClick={(e) => {
                            props.change(mark, e)
                        }}
                        style={{ cursor: 'pointer' }}
                    >

                    </Marker>
                    ))
                }
                <ToolTip visible={props.coordinates.visible} info={props.coordinates.selected} setItem={props.change} />
            </Map>
        </div>
    )
}