import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/about-us"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Order Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
