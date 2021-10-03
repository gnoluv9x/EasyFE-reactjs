import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumThumbnail.propTypes = {
    album: PropTypes.object.isRequired,
};

AlbumThumbnail.defaultProps = {};

function AlbumThumbnail({album}) {


    return (
        <div className="album">
            <div className="album-thumbnail">
                <img src={album.thumbnailUrl} alt={album.name}/>
            </div>
            <div className="album-name">
                <p>{album.name}</p>
            </div>
        </div>
    );
}

export default AlbumThumbnail;