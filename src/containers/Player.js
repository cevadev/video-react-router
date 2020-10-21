import React from 'react';
import { useLayoutEffect } from 'react'
import { connect } from 'react-redux';

import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

function Player(props){

    function goBack(){
        props.history.goBack()
    }

    //accedemos al id por medio de router quien maneja la ruta del player
    const { id } = props.match.params;


    /**
     * Validamos si existe un video que se esté ejecutando o si existe ese elemento para saber si lo podemos mostrar al user
     * ya sea el video o el mensaje de error que no se encontró el video dentro de nuestro reducer
     * 
     * en el filtro de los reducer obtenemos el elemento que conincida con el ID por lo que tenemos un objeto. Por ello
     * utilizamos Object.keys() para saber cuantos elementos tiene ese objeto
     */
    const hasPlaying = Object.keys(props.playing).length > 0;

    /**
     * Transmitimos un efecto que nos permite ejecutar la accion que se encarga de tener el id y luego enviarlo al 
     * reducer, para esta tarea utilizamos hooks
     * 
     * useEffect -> maneja el efecto que se encarga de encontrar el ID traido de los props y transmitirlos a nuestro action
     * para que vaya al reducer filtre el elemento y lo retorne al estado es asi como continuamos con el flujo de la info
     */
    useLayoutEffect(() =>{
        //le pasamos el id a getVideoSource para que vaya al reducer, filtre por medio del id y asi obtener en el estado
        //el arreglo con el id que buscamos y asi pode tener el source
        props.getVideoSource(id);
    }, [])


    // si hasPlaying es true es decir, tiene mas de 0 elementos le decimos que muestre el reproductor. de lo contrarios
    //redireccionamos a la pagina de notfound, es decir, no encontro el id y no se mostrara el video
    return hasPlaying ?(
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={goBack}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound />;
}

//export default Player
const mapStateToProps = state =>{
    return{
        playing: state.playing,
    }
}

//creamos nuestro action con mapDispatchToProps
const mapDisptachToProps =  {
    getVideoSource,
}

export default connect(mapStateToProps, mapDisptachToProps)(Player)