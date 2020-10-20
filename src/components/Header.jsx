import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutRequest } from '../actions'
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';


function Header(props){
  //objeto user
  const { user } = props  ;

  //validamos si tenemos o no un user
  const hasUser = Object.keys(user).length > 0;

  function handleLogout(){
    //enviamos un objeto vacio, de esa forma reiniciamos el estado y asi no hay un usuario
    props.logoutRequest({});
  }

  return(
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {
            //validamos si hay usuario loggeado mostramos gravatar de lo contrario mostramos una imagen general
            hasUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            //validacion -> si el usuario esta loggeado mostramos link para ir a su cuenta de lo contrario nada
            hasUser ? <li><a href="/">{user.name}</a></li> : null
          }

          {
            //validacion -< si tiene cuenta que haga sesion de lo contrario invitar a que haga sesion
            hasUser 
              ? <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li> 
              : <li><Link to="/login">Iniciar Sesión</Link></li>
          }
          
          
        </ul>
      </div>
    </header>
  );
} 

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func
}

//export default Header;

/**
 * Vamos a traer del estado el elemento que se encarga de los usuarios
 */
const mapStateToProps = state =>{
  return{
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
