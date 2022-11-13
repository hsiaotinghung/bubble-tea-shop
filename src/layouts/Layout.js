import classes from "./Layout.module.css";
import Navigation from "../components/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
