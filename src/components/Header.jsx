import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//validaciones
import classNames from 'classnames';

import { logoutRequest } from '../actions'
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

/**
   * validamos si nos encontramos dentro del login y asi poder cambiar las propiedades que tiene el scss
   * para ello traemos las propiedades del props isLogin, isRegister
   */
function Header(props){
  //objeto user
  const { user, isLogin, isRegister } = props  ;

  //validamos si tenemos o no un user
  const hasUser = Object.keys(user).length > 0;

  function handleLogout(){
    //enviamos un objeto vacio, de esa forma reiniciamos el estado y asi no hay un usuario
    props.logoutRequest({});
  }

  /**
   * logica para cambiar las propiedades de clase en scss segun si esta login
   * headerClass -> obtiene un objeto con el elemento que se va a respetar entodo el documento de scss en este caso header
   */
  const headerClass = classNames('header', {
    //si isLogin is true, lo asignamos al header
    isLogin,
    //si isRegister is true, lo asignamos al header
    isRegister
  });

  //reemplazamos el className por nuestra constante headerClass que ya posee el header como className pero tambien posee
  //condiciones que si se cumplen van a mostrar un valor u otro
  return(
    <header className={headerClass}>
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
