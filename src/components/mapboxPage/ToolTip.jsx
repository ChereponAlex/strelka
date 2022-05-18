import React from 'react';
import { Popup } from 'react-map-gl';
import { Rating } from './Rating.jsx';

export const ToolTip = (props) => {

    return (
        <>
            {props.visible ?
                <Popup
                    style={{ borderRadius: '10px', padding: '5px'}}
                    longitude={props.info.geometry.coordinates[0]}
                    latitude={props.info.geometry.coordinates[1]}
                    onClose={() => props.setItem(null)}
                >
                    <div className='popup-description'>
                        <div className='popup-description__name'>{props.info.properties.name}</div>
                        <div className='popup-description__raiting-container'>
                            <p>Рейтинг:({props.info.properties.rating ? props.info.properties.rating : 'Нет отзывов'})</p>
                            <Rating rating={props} />
                        </div>

                    </div>
                </Popup> : null
            }
        </>
    )
}
