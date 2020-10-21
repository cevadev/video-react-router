import React  from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//conectando con redux
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

import Header from '../components/Header';

import '../assets/styles/components/Register.scss';


function Register(props){

    //React-Hooks
    const [form, setValues] = React.useState({
        email: '',
        name: '',
        password: ''
    })

    function handleInput(event){
        //pasamos la información que queremos transmitir a nuestro estado
        setValues({
            //conservamos la info que venga del from
            ...form,
            //pasamos de forma dinamica
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        //conectar con react-redux
        props.registerRequest(form);

        //Una vez que el usuario termina el registro exitosamente lo direccionamos al home
        props.history.push('/');
    }
    //fin React-Hooks

    return(
        <React.Fragment>
            <Header isRegister={true}/>
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form onSubmit={handleSubmit} className="register__container--form">
                        <input name="name" onChange={handleInput} className="input" type="text" placeholder="Nombre" />
                        <input name="email" onChange={handleInput} className="input" type="text" placeholder="Correo" />
                        <input name="password" onChange={handleInput} className="input" type="password" placeholder="Contraseña" />
                        <button type="submit" className="button">Registrarme</button>
                    </form>
                    <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </React.Fragment>
    )
}

//export default Register

/**
 * Conectando con React-Redux
 */
const mapDisptachToProps = {
    registerRequest
}

export default connect(null, mapDisptachToProps)(Register)