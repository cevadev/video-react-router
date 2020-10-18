import { func } from 'prop-types';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

/**
 * la función App expone BrowserRouter y los elementos que vamos a tener para la construccion de rutas
 * Aplicamos un return explícito por lo que no se va a incluir un return , por ello solo colocamos ()
 */
const App = ()=>(
    /**
     * BrowserRouter encapsula cada uno de los componentes que necesitamos
     */
    <BrowserRouter>
        <Layout >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route component={NotFound}/>
        </Switch>
        </Layout>
    </BrowserRouter>
)

export default App