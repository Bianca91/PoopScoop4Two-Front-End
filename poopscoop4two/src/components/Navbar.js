import React, { PureComponent } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/users";
import {showProfile} from '../containers/MainPage'


class NavBar extends PureComponent {
  handleLogout = () => {
    console.log("logout");
    this.props.logout();
  };

  render() {
    return (

      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
          <ul class="right hide-on-med-and-down">
            <li onClick={this.showProfile}><a><i class="material-icons">search</i></a></li>
            <li onClick={this.showProfile}><a href="badges.html"><i class="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
          </ul>
        </div>
      </nav>

    );
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });
export default connect(mapStateToProps, { logout })(NavBar);
