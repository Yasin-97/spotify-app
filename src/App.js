import React,{useState, useEffect} from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./component/login/Login"
import Player from "./component/player/Player"
import BigDevice from "./component/player/bigDevice/BigDevice"
import { getTokenFromUrl } from "./spotify"
import {useDataProviderValue} from "./context"
import SpotifyWebApi from "spotify-web-api-js";

// this object is responsible for any interaction between this app and spotify api
const spotify = new SpotifyWebApi();
function App() {
  const [windowWidth,setWindowWidth]=useState(window.innerWidth)
  const deviceTest= windowWidth<690? (<BigDevice />):(<Player spotify={spotify}/>)
                                        
  const [{ user,token}, dispatch] = useDataProviderValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";// for security issues this is hidden from url
    const _token=hash.access_token;


    if(_token){
dispatch({type:"SET_TOKEN",token:_token})
      spotify.setAccessToken(_token)

      // getMe => gets the logged in user, in this case Yasin
      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user:user
        })
       
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        })
      })
      spotify.getPlaylist('5sVselcInAra7M0rswwUS9').then(response => {
        dispatch({
            type: "SET_CURRENT_PLAYLIST",
            currentPlaylist:response
        })
    })
    }
},[])
  return (
    <div className="App">
//      {token ? (deviceTest):(<Login />)}
     {token ? (<h1>updated now</h1>):(<Login />)}
     
    </div>
  );
}
export default App;
