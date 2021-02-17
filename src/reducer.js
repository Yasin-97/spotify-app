import React,{useState} from 'react'
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // change to null after devloping
    // token:'BQDpuxTmPUUqvKs2KumZt81BVKr_qmll4jswJeGGHlSi98z-BTZBHJUoiZqqyNGdMObEoUaIlXsndIQ8zZRt4ufvUJc4uXOy31-wWU3nycBdTbSjfYo6tZxGHRQJH6A1bBVF_IVsUexV-8pClH2q8gK9XiGdQOFJTukiYe7YusPmxya7'
}

// this listens to actions
// and does a specific thing based on type of any various action
const reducer = (state, action) => {

    // action => type, [payload]
    switch (action.type) {

        // on login, sets the user to data provider
        case "SET_USER": //type
            return {
                ...state,
                user: action.user //payload
            }
        case "SET_TOKEN":
            return {
                ...state,token:action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
                
            }
        
        case "SET_CURRENT_PLAYLIST":
            return {
                ...state, currentPlaylist: action.currentPlaylist
                
            }
        default:
            return state;
    }
}

export default reducer