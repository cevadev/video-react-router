import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';


//const API = 'http://localhost:3000/initalState'

const Home = ({ mylist, trends, originals, search }) => {
  //const initialState = useInitialState(API);
  return(
    <React.Fragment>
      <Header />
      <Search isHome={true}/>
      {search.length > 0 && (
          <Categories title="Search">
            <Carousel>
              {search.map(item => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
        </Categories>
        )}

      {mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map(item =>
              <CarouselItem key={item.id} {...item} isList={true}/>
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </React.Fragment>
  );
}
//export default Home;
//Funcion que nos trae los props de nuestro estado
function mapStateToProps(state){
  return{
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    search: state.search
  }
}
/**
 * Creamos el connector para unir nuestra app con el estado que pasamos por medio del provider. A connect le pasamos 2 params
 * 1. mapStateToProps -> mapeo de los props
 * 2. dispatch -> mapeamos los elementos que vamos a utilizar por medio de los actions (nuestra app no los tiene por ello null)
 */
export default connect(mapStateToProps, null)(Home)
