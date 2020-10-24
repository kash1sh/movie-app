import {ADD_MOVIES , ADD_FAVOURITES, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES} from '../actions/index'

const initialStoreState = {
    list:[],
    favourites: [],
    showFavourites: false
}
// Spread Operator ..., here if we have 2 objects and let o1 be {a:1,b:2,c:3} and o2 which we want to be same as o1, we can use this
// spread operator, as  o2 = {...o1}, now if we want to change value of c to 5, then  o2 ={...o,c:5}
export default function movies (state =  initialStoreState, action){
    // if(action.type === ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }

    // return state;

    switch(action.type) {
        case ADD_MOVIES : 
        return {
            ...state,
                    list:action.movies
        }

        case ADD_FAVOURITES : 
        return {
            ...state,
                    favourites: [action.movie,...state.favourites]
        }
        // 220 IQ Time
        // this insde filter is actually a function basically a shorthand of writing an arrow function
        case REMOVE_FAVOURITE :
            const filteredArray = state.favourites.filter(
                movie => movie.Title != action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray 
            }
        case SET_SHOW_FAVOURITES : 
        return {
            ... state,
                showFavourites:action.val
        }
        default :
        return state;
    }
}
