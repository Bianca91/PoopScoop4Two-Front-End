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
          <ul class="right">
            <li onClick={this.handleLogout}><a href="/login"><i class="material-icons">exit_to_app</i></a>
            </li>
          </ul>

    );
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });
export default connect(mapStateToProps, { logout })(NavBar);
