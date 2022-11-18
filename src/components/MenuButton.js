import MenuIcon from "./MenuIcon";
import classes from "./MenuButton.module.css";
import Drawer from "./Drawer";
import { useState } from "react";
import NavLinks from "./NavLinks";

const CartButton = (props) => {
  const [drawerIsShown, setDrawerIsShown] = useState(false);
  const closeMenu = () => setDrawerIsShown(false);
  const openMenu = () => setDrawerIsShown(true);
  return (
    <>
      <button className={classes.button} onClick={openMenu}>
        <span className={classes.icon}>
          <MenuIcon />
        </span>
      </button>
      <Drawer drawerIsShown={drawerIsShown} handleHide={closeMenu}>
        <NavLinks></NavLinks>
      </Drawer>
    </>
  );
};

export default CartButton;
