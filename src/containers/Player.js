import React from 'react';

import '../assets/styles/components/Player.scss';

function Player(props){

    //accedemos al id por medio de router quien maneja la ruta del player
    const { id } = props.match.params;

    function goBack(){
        props.history.goBack()
    }

    return(
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={goBack}>
                    Regresar
                </button>
            </div>
        </div>
    );
}

export default Player