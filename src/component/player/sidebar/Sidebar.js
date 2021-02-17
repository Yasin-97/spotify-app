import React, { useEffect } from "react";
import "./sidebar.css";
import logo from "../../../img/logo.png";
import SidebarOption from "../sidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataProviderValue } from "../../../context";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataProviderValue();
  const name = playlists.items && playlists.items.map((item) => item.name);

  return (
    <div className="sidebar">
      <img src={logo} alt="" className="sidebar__logo" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      {playlists.items ? (
        playlists.items.map((item, index) => (
          <SidebarOption key={index} title={item.name} currentId={item.id} />
        ))
      ) : (
        <SidebarOption title="loading..." />
      )}
    </div>
  );
}

export default Sidebar;
