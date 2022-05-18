import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import numbersToStars from '../../util/numberToStars'

export const Rating = (rating) => {

    const colors = { orange: '#FFBA5A' };
    const styles = {
        stars: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 2,
        },
    }
    const stars = numbersToStars(
        rating.rating.info.properties.rating,
        <FaStar color={colors.orange} size={14} />,
        <FaStarHalfAlt color={colors.orange} size={14} />
    )
    return (
        <div style={styles.stars}>
            {
                stars.map((item, index) => (
                    <div key={index} style={styles.stars}>{item}</div>
                ))
            }
        </div>
    )
}
