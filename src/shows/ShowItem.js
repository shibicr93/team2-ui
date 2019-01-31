import React from 'react';
import PropTypes from 'prop-types';
import './ShowItem.css';

const ShowItem = ({ movieName, cinema, experience, showTime, header = false }) => {
    let showTimeEl = showTime;

    if (!header) {
        showTimeEl = <button>{showTime}</button>;
    }
    return (
        <div className='show-item'>
            <div className='show-item-movie'>{movieName}</div>
            <div className='show-item-cinema'>{cinema}</div>
            <div className='show-item-experience'>{experience}</div>
            <div className='show-item-showtime'>{showTimeEl}</div>
        </div>
    );
}

ShowItem.defaultProps = {};

ShowItem.propTypes = {
    movieName: PropTypes.string.isRequired,
    cinema: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    showTime: PropTypes.string.isRequired,
}

export default ShowItem;