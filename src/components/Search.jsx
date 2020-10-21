import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { searchVideo } from '../actions';

import '../assets/styles/components/Search.scss';

function Search(props){

  const { isHome, searchVideo } = props;
  //const hasSearch = Object.keys(search).length > 0;
  const handleInput = (event) => {
    // setValues({
    //   ...form,
    //   [event.target.name]: event.target.value,
    // });
    searchVideo(event.target.value);
  };

  /* const searchStyle = classNames('categories', {
    isSearch,
  }); */

  const inputStyle = classNames('input', {
    isHome : props.isHome
  });

  return(
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." onChange={handleInput}/>
      {/* {hasSearch ? (
          <Categories title='Resultados' className={searchStyle}>
            <Carousel>
              {search.map((item, index) => <CarouselItem key={index} {...item} />)}
            </Carousel>
          </Categories>
        ) : null} */}
    </section>
  );
}

//export default Search;

/* const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
}; */

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);