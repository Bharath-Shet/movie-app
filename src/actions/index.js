// action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'


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