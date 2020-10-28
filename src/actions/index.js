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
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
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

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(searchText){

 

  return function(dispatch){
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=5da37c67&t=${searchText}`;
    // const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    fetch(url)
    .then((response) => response.json())
    .then((movie) =>{
      console.log('movie ',movie);

    dispatch(addMovieSearchResult(movie));

    })
  }

 
}

export function addMovieSearchResult(movie){
  return {
    type: ADD_SEARCH_RESULT,
    movie
  };
}