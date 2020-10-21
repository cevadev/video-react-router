import React from 'react';
import Header from '../components/Header';

function NotFound(){
    return(
        <React.Fragment>
            <Header />
            <h1>La dirección que busca no se encontró</h1>
            <h2>Regrese al home...</h2>
        </React.Fragment>
    )
}

export default NotFound