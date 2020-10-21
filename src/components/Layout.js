import { func } from 'prop-types';
import React from 'react';

import Footer from './Footer';

/**
 * Layout nos permite manejar la persistencia de algunos componentes. Dejamos de manera fija el footer
 * pero el header que actua conforme a una validacion lo quitamos y lo colocamos en el home
 */
function Layout({ children }){
    return(
        <div className="App">
            {/* <Header /> */}
                { children }
            <Footer />
        </div>
    )
}

export default Layout