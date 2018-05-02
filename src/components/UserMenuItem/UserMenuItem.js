import React, { Component } from "react";

class UserMenuItem extends Component {
  render() {
    return (
      <li>
        <a>User Name</a>
        <div className="uk-navbar-dropdown">
          <ul className="uk-nav uk-navbar-dropdown-nav">
            <li>
              <a>Log Out</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default UserMenuItem;
