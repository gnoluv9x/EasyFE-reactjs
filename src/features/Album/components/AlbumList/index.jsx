import React from 'react';
import PropTypes from 'prop-types';
import AlbumThumbnail from '../AlbumThumbnail';
import './styles.scss';

AlbumRender.propTypes = {
    albumList : PropTypes.array.isRequired,
};

AlbumRender.defaultProps = {};


function AlbumRender({albumList}) {

    return (
        <ul className = "album-list">
            { albumList.map( album => (
                <li key={album.id}>
                    <AlbumThumbnail album={album} />
                </li>
            ))}
        </ul>
    );
    
}

export default AlbumRender;