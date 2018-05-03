import React, { Component } from "react";
import Session from "../../lib/session";

class UserMenuItem extends Component {
  logout() {
    Session.logout();
  }

  render() {
    const logout = this.logout.bind(this);

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
