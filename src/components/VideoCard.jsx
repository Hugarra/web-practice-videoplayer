import React from 'react';

function VideoCard(props) {
    return (
        <div className="col-12 col-md-3">
            <div className="video-card" onClick={() => {
                window.location.href = "/video/" + props.videoId;
            }}>
                <img src={props.image} className="card-img-top " alt="..."/>
                <h5 className="card-title m-1">{props.title}</h5>
            </div>
        </div>
    );
}

export default VideoCard;