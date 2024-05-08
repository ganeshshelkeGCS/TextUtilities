import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// check props value
Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
// default props
Navbar.defaultProps = {
  title: "Utils",
  aboutText: "about",
};


var cancellable = function(fn, args, t) {
  fn(...args);
  let timer = setInterval(()=> fn(...args),t);

  let cancelFn = () => clearInterval(timer)
  return cancelFn;
};