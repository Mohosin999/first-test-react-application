import { Link } from "@gatsbyjs/reach-router";
import classes from "./Layout.module.css";

function Layout(props) {
  const path = window.location.pathname;
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <div>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link
                to="/"
                className={
                  path === "/" ? classes.navItemActive : classes.navLink
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  path === "/contact" ? classes.navItemActive : classes.navLink
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/clock"
                className={
                  path === "/clock" ? classes.navItemActive : classes.navLink
                }
              >
                Clock
              </Link>
            </li>
            <li>
              <Link
                to="/task"
                className={
                  path === "/task" ? classes.navItemActive : classes.navLink
                }
              >
                Task
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <div className={classes.menu}>
          <ul>
            <li>Footer Link One</li>
            <li>Footer Link Two</li>
            <li>Footer Link Three</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
