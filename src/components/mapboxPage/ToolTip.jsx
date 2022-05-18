import React from 'react';
import { Popup } from 'react-map-gl';

export const ToolTip = (props) => {

    return (
        <>
            {props.visible ?
                <Popup
                style={{ borderRadius: '20px', padding: '20px' }}
                longitude={props.info.geometry.coordinates[0]}
                latitude={props.info.geometry.coordinates[1]}
                onClose={() => props.setItem(null)}
                >
                    <div className='popup-description'>
                        <h2>{props.info.properties.name}</h2>
                        <p>Рейтинг: {props.info.properties.rating}</p>
                    </div>
                </Popup> : null
            }
        </>
    )
}
