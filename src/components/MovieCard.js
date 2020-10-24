import React from 'react';
import {addFavourites, removeFavourite} from '../actions'


class MovieCard extends React.Component {
  
    handleFavouriteClick = ()=>{
        const {movie} = this.props;

        this.props.dispatch(addFavourites(movie))
    }

    handleUnFavouriteClick = ()=>{
        // const {movie,isMovieFavourite} = this.props;

        // this.props.dispatch(addFavourites(movie))
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie))
    }

    render(){
        const {movie,isMovieFavourite} = this.props;

       
        return (
          <div className="movie-card">
             <div className="left">
                 <img alt = "movie-poster" src={movie.Poster} /> 
             </div>
             <div className="right">
                 <div className="title">{movie.Title}</div>
                 <div className="plot">{movie.Plot}</div>
                <div style={{paddingLeft:19,paddingTop:5,fontWeight:560}}>Genre : {movie.Genre}</div>
        <div style = {{paddingLeft:19,paddingTop:5,fontSize:13}}>Language : {movie.Language}</div>
                 <div className="footer">
                    <div className="rating">IMDB Rating : {movie.imdbRating}</div>
                    <div className="rating"> MetaCritic : {movie.Metascore}</div>

                {
                   isMovieFavourite 
                   ? <button className="unfavourite-btn" onClick = {this.handleUnFavouriteClick}>UnFavourite</button>
                   : <button className="favourite-btn" onClick = {this.handleFavouriteClick}>Favourite</button>
                }
            
            {/* <button className="favourite-btn" onClick = {this.handleFavouriteClick}>Favourite</button> */}
                 </div>
             </div>
          </div>
          );
    }
 
}

export default MovieCard;
