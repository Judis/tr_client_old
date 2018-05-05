import React, { Component } from "react";
import logout from "../../lib/logout";

class UserMenuItem extends Component {
  render() {
    return (
      <li>
        <a>User Name</a>
        <div className="uk-navbar-dropdown">
          <ul className="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a onClick={logout}>Log Out</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default UserMenuItem;
