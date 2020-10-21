import { element } from "prop-types";

function reducer(state, action){
    switch(action.type){
        case 'SET_FAVORITE':
            if(state.mylist.filter((element) => element.id === action.payload.id).length !== 0){
                return state;
            }
            return{
                ...state,
                mylist: [...state.mylist, action.payload]
            }

        case 'DELETE_FAVORITE':
            return{
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }

        case 'LOGIN_REQUEST':
            return{
                //respetamos el estado q tenemos
                ...state,
                //le pasamos al user el objeto que estamos creando en el action
                user: action.payload
            }

        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload
            }

        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload
            }

        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                /**
                 * Hacemos una busqueda (en los dos arreglos, trends y orginals) dentro de los arreglos de nuestros videos, es decir, 
                 * que por medio del ID y regresamos
                 * el ID que concida con el payload que estamos mandando
                 * item -> representa los elementos que se encuentran dentro de trends.
                 * item.id === action.payload -> obtenemos el elemento cuyo ID coincidan
                 * El parametro id llega como un string por lo que debemos convertirlo a number para hacer la comparacion
                 * si no se encuentra un elemento, retorna un array vacio
                 */
               /*  playing: state.trends.find(item => item === Number(action.payload)) ||
                         state.originals.find(item => item === Number(action.payload)) ||
                         [] */
                playing: state.trends.concat(state.originals).find(item => item.id === Number(action.payload)) || []
            }

        default:
            return state;
       
    }
}

export default reducer