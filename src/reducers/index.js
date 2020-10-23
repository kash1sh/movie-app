import {ADD_MOVIES} from '../actions/index'

const initialStoreState = {
    list:[],
    favourites: [],
}
// Spread Operator ..., here if we have 2 objects and let o1 be {a:1,b:2,c:3} and o2 which we want to be same as o1, we can use this
// spread operator, as  o2 = {...o1}, now if we want to change value of c to 5, then  o2 ={...o,c:5}
export default function movies (state =  initialStoreState, action){
    if(action.type === ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movies
        }
    }

    return state;
}
