import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataProviderValue } from "../../../context";

function Header() {
  const [{ user }, dispactch] = useDataProviderValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for artists, songs or padcasts"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h5>{user?.display_name}</h5>
      </div>
    </div>
  );
}

export default Header;
