import React, { Component } from 'react'
import { StoreContext } from '..';
import {handleMovieSearch, addMovieToList} from '../actions';
class Navbar extends Component {

    constructor(props){
        super(props)
        this.state={
            searchText:''
        }
    }
    handleChange = (event)=>{
        this.setState({
            searchText: event.target.value
        })
    }

    handleAddToMovies = (movie) =>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults: false
        })
    }
    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText))
    }
    render() {
        const {result,showSearchResults} = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>


                    {showSearchResults &&
                    <div className="search-results">
                        <div className="search-result">
                            <img src={result.Poster}/>

                            <div className="movie-info">
                                <span>{result.Title}</span>
                                <p className="plot">{result.Plot}</p>
                                <button className="" onClick={() => this.handleAddToMovies(result)}>
                                Add to movie
                                </button>
                            </div>
                        </div>
                    </div>
                        
                        }
                </div>
            </div>
        )
    }
}

class NavbarWapper extends Component{
    render(){
        return(
            <StoreContext.Consumer>
               {(store)=> <Navbar dispatch={store.dispatch} search={this.props.search}/>} 
            </StoreContext.Consumer>
        )
    }
}

export default NavbarWapper;