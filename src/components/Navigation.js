import CartButton from "./CartButton";
import MenuButton from "./MenuButton";
import classes from "./Navigation.module.css";
import NavLinks from "./NavLinks";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.menu}>
          <MenuButton />
        </div>

        <h1>🧋Bubble Tea</h1>
        <div className={classes.right}>
          <div className={classes["nav-links"]}>
            <NavLinks />
          </div>
          <CartButton />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={""} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
