import React from 'react';



class MovieCard extends React.Component {
    render(){
        const {movie} = this.props;
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
            
            <button className="favourite-btn">Favourite</button>
                 </div>
             </div>
          </div>
          );
    }
 
}

export default MovieCard;
