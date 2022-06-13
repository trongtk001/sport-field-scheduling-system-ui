import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "./NavBar.module.scss";
import { SearchBox } from "../index";
const cx = classNames.bind(styles);

function Header() {
  return (
    <Navbar className={cx("nav")} bg="light" expand="lg">
      <Link className={"navbar-brand"} to="/">
        <img className={cx("icon")} src="../favicon.ico" alt="icon" />
      </Link>

      <Link className="nav-link link-success" to="/">
        Home
      </Link>

      <Navbar.Toggle />

      <Navbar.Collapse className={cx("action")} id="basic-navbar-nav">
        <SearchBox />

        <div className={cx("authentication")}>
          <Button className={cx("login-btn")} variant="light">
            Log in
          </Button>

          <Button variant="success">Sign up</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
