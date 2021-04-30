import React from 'react';
import ReactPlayer from 'react-player'

import { useParams } from "react-router-dom";

function VideoPlayer(props) {
    let { id } = useParams();
    return (
        <div className="container-fluid">
            <br></br>
            {
                {
                    1 :
                        <ReactPlayer className='react-player m-auto' url={"https://www.youtube.com/watch?v=-TPJot7-HTs"} width='1000px' height='563px' controls = {true} playing = {true} volume = {0.5} />,
                    2 :
                        <ReactPlayer className='react-player m-auto' url={"https://www.youtube.com/watch?v=3E4HcpHpbZs"} width='1000px' height='563px' controls = {true} playing = {true} volume = {0.5} />,
                    3 :
                        <ReactPlayer className='react-player m-auto' url={"https://www.youtube.com/watch?v=93Elhrlxk7o"} width='1000px' height='563px' controls = {true} playing = {true} volume = {0.5} />,
                    4 :
                        <ReactPlayer className='react-player m-auto' url={"https://www.youtube.com/watch?v=DKHdsB5_oyc"} width='1000px' height='563px' controls = {true} playing = {true} volume = {0.5} />
                }[id]
            }
        </div>
    );
}

export default VideoPlayer;