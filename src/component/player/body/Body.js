import React from "react";
import "./body.css";
import Header from "../header/Header";
import SongRow from "../songRow/SongRow";
import ToolTip from "../toolTip/ToolTip";
import defaultImg from "../../../img/songImg.jpg";
import { useDataProviderValue } from "../../../context";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ currentPlaylist }, dispatch] = useDataProviderValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={currentPlaylist?.images[0].url || defaultImg} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{currentPlaylist?.name}</h2>
          <p>{currentPlaylist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <ToolTip
            child={<PlayCircleFilledIcon className="body__shuffle" />}
            placement="top"
          />
          <ToolTip child={<FavoriteIcon fontSize="large" />} placement="top" />
          <ToolTip child={<MoreHorizIcon />} placement="top" />
        </div>

        {currentPlaylist?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
