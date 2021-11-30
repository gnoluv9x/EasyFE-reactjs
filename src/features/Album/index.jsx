import React from 'react';
import AlbumRender from './components/AlbumList';

AlbumList.propTypes = {
    
};

function AlbumList(props) {

    const albumList = [
        {
            id: 1,
            name: 'Những ca khúc Đạt G',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/avatars/0/a/e/e/0aeee5e212514783462c6a5577311453.jpg',
        },
        {
            id: 2,
            name: 'Những ca khúc gây nghiện',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/2/7/e/727e8710ac52bf0e128bf63cfcd441fd.jpg',
        },
        {
            id: 3,
            name: 'Những ca khúc Andree',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/8/1/9/581982a657a1aa0d2e26fa607aa04750.jpg',
        },
    ]

    return (
        <div>
            <h3>Có thể bạn sẽ thích đấy</h3>
            <AlbumRender albumList={albumList} />
        </div>
    );
}

export default AlbumList;