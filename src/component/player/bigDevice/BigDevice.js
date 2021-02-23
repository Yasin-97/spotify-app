import React from "react";
import './bigDevice.css'
import spotifyLogo from '../../../img/bigLogo.png'
function BigDevice() {
  return (
    <div class="big__device">
      <img src={spotifyLogo} alt="" />
      <h3>Please open app on a desktop device.</h3>
    </div>
  );
}

export default BigDevice;
