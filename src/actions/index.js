// action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
// action creators
export function addMovies(movies) {
    return{
        type: ADD_MOVIES,
        movies: movies
    }
}

export function addFavourite(movies) {
    return{
        type: ADD_FAVOURITE,
        movies: movies
    }
}

export function removeFromFavourite(movies) {
    return{
        type: REMOVE_FROM_FAVOURITE,
        movies: movies
    }
}

export function setShowFavourites(val) {
    return{
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movies){
    return{
        type: ADD_MOVIE_TO_LIST,
        movies: movies
    }
}

export function handleMovieSearch(movies) {
    const url = `http://www.omdbapi.com/?apikey=7a5e14e4&t=${movies}`;

    return function(dispatch){
        fetch(url)
        .then(res => res.json())
        .then(movie => {
            console.log('movie', movie)
            dispatch(addMovieSearchResult(movie));
        })
    }
}

export function addMovieSearchResult (movies){
    return {
        type: ADD_SEARCH_RESULT,
        movies: movies
    }
}