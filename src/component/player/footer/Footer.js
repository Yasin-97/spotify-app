import React from "react";
import "./footer.css";
import defaultSongImg from "../../../img/songImg.jpg";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ToolTip from "../toolTip/ToolTip";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={defaultSongImg} alt="" className="footer__albumLogo" />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>User</p>
        </div>
      </div>
      <div className="footer__center">
        <ToolTip
          child={<ShuffleIcon className="footer__green" />}
          placement="left"
        />
        <ToolTip
          child={<SkipPreviousIcon className="footer__icon" />}
          placement="top"
        />
        <ToolTip
          child={
            <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          }
          placement="top"
        />
        <ToolTip
          child={<SkipNextIcon className="footer__icon" />}
          placement="top"
        />
        <ToolTip
          child={<RepeatIcon className="footer__green" />}
          placement="right"
        />
      </div>
      <div className="footer__right">
        <Grid container spacing={2} justify="flex-end" alignItems="center">
          <Grid item>
            <ToolTip child={<PlaylistPlayIcon />} placement="top" />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
