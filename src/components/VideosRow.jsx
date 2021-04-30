import React from 'react';

import VideoCard from './VideoCard.jsx'

import v1 from '../images/Buenos Aires 4K - Driving Downtown - Morning Drive.jpg'
import v2 from '../images/4K DRIVE Buenos Aires ARGENTINA Jacaranda trees 4k video.jpg'
import v3 from '../images/4K DRIVE Buenos Aires ARGENTINA Callao Avenue 4k video VLOG.jpg'
import v4 from '../images/[4K] Buenos Aires Walk - Catalinas Norte - Barrio de Retiro _ Buenos Aires- Argentina.jpg'

function VideosRow(props) {
    return (
        <div className="videos-container">
            <h4 className="m-auto">{props.title}</h4>
            <div className="video-row">
                <VideoCard title="Buenos Aires 4K - Driving Downtown - Morning Drive" image={v1} videoId="1" ></VideoCard>
                <VideoCard title="4K DRIVE Buenos Aires ARGENTINA Jacaranda trees 4k video" image={v2} videoId="2" ></VideoCard>
                <VideoCard title="4K DRIVE Buenos Aires ARGENTINA Callao Avenue 4k video VLOG" image={v3} videoId="3" ></VideoCard>
                <VideoCard title="[4K] Buenos Aires Walk - Catalinas Norte - Barrio de Retiro _ Buenos Aires- Argentina" image={v4} videoId="4" ></VideoCard>
            </div>
        </div>
    );
}

export default VideosRow;