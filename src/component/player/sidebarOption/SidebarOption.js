import React, { useState, useEffect, useRef } from "react";
import "./sidebarOption.css";
import { useDataProviderValue } from "../../../context";
import SpotifyWebApi from "spotify-web-api-js";
import ToolTip from "../toolTip/ToolTip";

const spotify = new SpotifyWebApi();

function SidebarOption({ title, Icon, currentId }) {
  const [{ currentPlaylist }, dispatch] = useDataProviderValue();

  const changePlaylist = () => {
    spotify.getPlaylist(currentId).then((response) => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        currentPlaylist: response,
      });
    });
  };
  return (
    <div className="sidebarOption" onClick={changePlaylist}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <ToolTip child={<h4>{title}</h4>} /> : <p>{title}</p>}
    </div>
  );
}
// export {playlistId};
export default SidebarOption;
