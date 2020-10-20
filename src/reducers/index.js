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

        default:
            return state;
       
    }
}

export default reducer