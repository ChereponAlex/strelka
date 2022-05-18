import React from 'react';
import points from '../../points/points.js'

export const LocationsList = (props) => {

    return (
        <div className='main-container__list-background'>
            <div className="main-container__list">
                {points.features.map((item, index) =>
                    <div
                        tabIndex="0"
                        className='main-container__list--item'
                        key={index + 1}
                        onClick={() => {
                            props.changeSelectedLocation(item)
                        }}>
                        {item.properties.name}
                    </div>
                )}
            </div>
        </div>
    )
}