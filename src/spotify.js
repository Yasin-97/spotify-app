// all spotify logics fall here


// this links to all authentication and logic stuffs I need 
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/


// by login btn the user gets sent to authEndPoint, after logging in, he is
// redirected to redirectUri(main page)
export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = encodeURIComponent("https://spotify-app-yasin.netlify.app/")
const clientId = "2c297407321f4b66bcd9e79ac2c3eb31"


// these scopes are the actions allowed on this app 

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

// get the token returned in url after logged in 
export const getTokenFromUrl = () => {

    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{})
}

// login url as a string interpolation
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`


// *** %20 adds a space caracter like user - top - read % 20 user - modify - playback - state
// *** response_type=token => when the user is authenticated, this returns a token in the url (a string to prove that I'm the real owner of the account)

