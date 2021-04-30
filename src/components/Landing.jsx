import React from 'react';

import VideoRow from './VideosRow.jsx'

function Landing(props) {
    return (
        <div>
            <VideoRow title="Buenos Aires" ></VideoRow>
            <br></br>
            <div className="container-fluid text-start">
                <p>Copyright - Rights reserved to their respective creators</p>
                <p>Youtube videos:</p>
                <p><a href="https://www.youtube.com/watch?v=-TPJot7-HTs">Buenos Aires 4K - Driving Downtown - Morning Drive (J Utah)</a></p>
                <p><a href="https://www.youtube.com/watch?v=3E4HcpHpbZs">4K DRIVE Buenos Aires ARGENTINA Jacaranda trees 4k video (4K DRIVE)</a></p>
                <p><a href="https://www.youtube.com/watch?v=93Elhrlxk7o">4K DRIVE Buenos Aires ARGENTINA Callao Avenue 4k video VLOG (4K DRIVE)</a></p>
                <p><a href="https://www.youtube.com/watch?v=DKHdsB5_oyc">[4K] Buenos Aires Walk - Catalinas Norte - Barrio de Retiro / Buenos Aires- Argentina (BAIRES WALKER)</a></p>
            </div>
        </div>
    );
}

export default Landing;