import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';
import removeIcon from '../assets/static/remove-icon.png';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

function CarouselItem (props) {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () =>{
    props.setFavorite({
      id, cover, title, year, contentRating, duration
    })
  }

  function handleDeleteFavorite(itemId){
    props.deleteFavorite(itemId)
  }

  return(
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />

        {
          /**Si isList es true mostramos el icono de eliminar video por que en la lista de favoritos
          * vamos a eliminar video y no volverlo a añadir
           */
          isList 
            ? 
              <img className="carousel-item__details--img" src={removeIcon} alt="Remove Icon" 
              onClick={()=> handleDeleteFavorite(id)} />
            :
              <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" onClick={handleSetFavorite} /> 
        }
        
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
  );
}

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

//export default CarouselItem;

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}
export default connect(null, mapDispatchToProps)(CarouselItem);