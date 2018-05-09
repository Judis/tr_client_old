import React, { Component } from "react";
import logout from "../../lib/logout";
import Session from "../../lib/session";

class UserMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: Session.username || null
    };
  }

  render() {
    return (
      <li>
        <a>{this.state.userName}</a>
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
