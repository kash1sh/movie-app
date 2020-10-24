// {
//     type:'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }
// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
// export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
// action creators
export function addMovies(movies){
    return{
        
            type:ADD_MOVIES,
            movies
          }
    
}

export function addFavourites(movie){
    return{
        
            type:ADD_FAVOURITES,
            movie
          }
    
}

export function removeFavourite(movie){
    return{
        
            type:REMOVE_FAVOURITE,
            movie
          }
    
}

export function setShowFavourites(val){
    return{
        
            type:SET_SHOW_FAVOURITES,
            val
          }
    
}