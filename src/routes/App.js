import { func } from 'prop-types';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
/**
 * la función App expone BrowserRouter y los elementos que vamos a tener para la construccion de rutas
 * Aplicamos un return explícito por lo que no se va a incluir un return , por ello solo colocamos ()
 */
const App = ()=>(
    /**
     * BrowserRouter encapsula cada uno de los componentes que necesitamos
     */
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
)

export default App