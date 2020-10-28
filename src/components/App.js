import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, setShowFavourites} from '../actions'
import {StoreContext} from '../index'
import {connect} from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    // make an API call 
    // dispatch the action
    
    this.props.dispatch(addMovies(data))
    // console.log("STATE", this.props.getState());
  }

      isMovieFavourite = (movie)=>{
        const {movies} =  this.props;
        const {favourites} =movies; 

        const index = favourites.indexOf(movie);

        if(index !== -1)
        {
          return true;
        }
        return false;
      }

      onChangeTab = (val) =>{
        this.props.dispatch(setShowFavourites(val))
      }
  render(){
    const {movies,search}  = this.props;
    const {list, favourites,showFavourites} = movies;
    console.log(this.props);

    const displayMovies = showFavourites? favourites:list;
    return (
      <div className="App">
       <Navbar search= {search}/>
  
       <div className = "main">
         <div className = "tabs">
           <div className = {`tab ${showFavourites ? '' : 'active-tabs'}`} onClick = {() =>this.onChangeTab(false)}>Movies</div>
           <div className =  {`tab ${showFavourites ? 'active-tabs' : ' '}`}  onClick = {()=>this.onChangeTab(true)}>Favourites</div>
         </div>
         <div className = "list">
            {
              displayMovies.map((movie,index)=>(
                <MovieCard 
                movie = {movie} 
                key = {movie.imdbID} 
                dispatch = {this.props.dispatch}
                isMovieFavourite = {this.isMovieFavourite(movie)}
                
                />
              ))}
            
         </div>
         {displayMovies.length ===0 ? <div className="no-movies">No movies to display</div>:null}
         {/* ds */}
       </div>
      </div>
    );
  }
  
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store = {store}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state){
  return{
    movies:state.movies,
    search:state.search
}
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
