import React from 'react';
// import { StoreContext } from '..';
import {handleMovieSearch,addMovieToList} from '../actions';
import {connect} from 'react-redux';
// import {data} from '../data';


class Navbar extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            // showSearchResults:true,
            searchText: ''
        }
        
    }
    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
      };
    handleSearch = ()=>{
        const { searchText }  = this.state;

        this.props.dispatch(handleMovieSearch(searchText)) ;
        // console.log('called action for search')
    }
    handleChange = (e)=>{
        // console.log('handleChange is called')
        this.setState({
            searchText : e.target.value
        })
    }
   
    render(){
        // const { showSearchResults } = this.state;
        const {result:movie, showSearchResults} = this.props.search;
        return (
          <div className="nav">
              <div className="search-container">
                  <input onChange = {this.handleChange}></input>
                  {/* <input onChange = {this.handleChange}/> */}
                  <button id ="search-btn" onClick={this.handleSearch}>Search</button>

                   { ( showSearchResults &&
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
              </div>
          </div>
          );
    }
 
}
// class NavbarWrapper extends React.Component{
//     render(){
//         return(
//             <StoreContext.Consumer>
//                 {
//                     (store)=><Navbar dispatch = {store.dispatch} search = {this.props.search}/>
//                 }
//             </StoreContext.Consumer>
//         )
//     }
// }

function mapStateToProps(state){
    return{
        movies:state.movies,
    search:state.search
    }
    
}

const connectedNavbarComponent = connect(mapStateToProps)(Navbar);
export default connectedNavbarComponent;
