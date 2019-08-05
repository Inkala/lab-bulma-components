import React from 'react';

import CoolButton from './CoolButton';

function Navbar() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="Bulma Logo"
          />
        </a>

        <a
          href="#0"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="#0" className="navbar-item">Home</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isLight isInfo>Log in</CoolButton>
              <CoolButton isPrimary><strong>Sign up</strong></CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
