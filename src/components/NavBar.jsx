import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./NavBar.module.css";

function NavBar() {
  const handleClick = () => {

  };

  return (
    <nav className={classes.nav}>
      <h6>Earthly.</h6>
      <ul>

        <li>HOME</li>


        <li>SHOP</li>


        <li>GET IN TOUCH</li>


        <li>STATS</li>

      </ul>
      <span>
        <input type='text' placeholder='Search Sustainable Products' />
        <SearchIcon className={classes.icon} />
      </span>

      <button onClick={() => handleClick()}>Cart</button>
    </nav>
  );
}

export default NavBar;
