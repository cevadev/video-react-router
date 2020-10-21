import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Usando dependencias para redux
 */
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import Header from '../components/Header';

import '../assets/styles/components/Login.scss';
import GoogleIcon from '../assets/static/google-icon.png';
import TwitterIcon from '../assets/static/twitter-icon.png';

/**
 * El Componente funcional Login lo pasamos por medio de props
 */

 function Login(props){
     /**
      * 1. form -> capturamos toda la informacion del formulario
      * 2. setValues -> guardamos los valores que obtenemos
      * A useState le pasamos un objeto que sera la info inicial que contendrá el estado inicial
      */
     const [form, setValues] = React.useState({
         email: '',
     })

     /**
      * Traemos la información: creamos una funcion que manejara los cambios que se realizan en los inputs, para ello escuchará
      * el valor event de los inputs
      * debemos manejar los cambios dentro de los inputs
      * debemos manejar el handleSubmit que nos permitirá enviar la información 
      */
     function handleInputs(event){
         //llamamos a setValues para guardar la información
         setValues({
             ...form,//obtenemos todos los valores del form
             [event.target.name]: event.target.value
         })
     } 

     /**
      * Funcion responsable de enviar o transmitir los elementos capturados a donde los necesitemos
      * cuando hagamos click en enviar al formulario, va a capturar dicha informacion y la va a presentar donde sea necesario
      */
     function handleSubmit(event){
         //evitamos que hmtl envie el formulario por url (necesario cuando trabajamos con react)
         event.preventDefault();
         
         //enviamos la informacion por medio del loginRequest hacia mi estado
         props.loginRequest(form);

         /**
          * Una vez hecho session, enviamos al usuario al Home por medio de react-router
          * props.historia -> accede al browser router que maneja todo el flujo de la navegación
          * si a cumplido con los requisitos para el login lo dirigimos al home
          */
         props.history.push('/');
     }

     return(
         <React.Fragment>
            <Header isLogin={true}/>
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input 
                            name="email"
                            className="input" 
                            type="text" 
                            placeholder="Correo"
                            onChange={handleInputs} />

                        <input 
                            name="password"
                            className="input" 
                            type="password" 
                            placeholder="Contraseña"
                            onChange={handleInputs} />

                        <button type="submit" className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                <section className="login__container--social-media">
                    <div><img src={GoogleIcon} alt=""/> Inicia sesión con Google</div>
                    <div><img src={TwitterIcon} alt=""/> Inicia sesión con Twitter</div>
                </section>
                    <p className="login__container--register">
                        No tienes ninguna cuenta 
                        <Link to="/register">
                            Regístrate
                        </Link>
                    </p>
                </section>
            </section>
        </React.Fragment>
     )
 }

 //export default Login

 /**
  * Traemos la informacion del login
  */
 const mapDispatchToProps = {
     loginRequest,
 }
 /**
  * conectando con redux
  */
 export default connect(null, mapDispatchToProps)(Login);