import React, { PureComponent } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/users";



class NavBar extends PureComponent {
  handleLogout = () => {
    console.log("logout");
    this.props.logout();
  };

  render() {
    return (
      <ul className="NavBar">
        {this.props.currentUser && (
          <li>
              <Link to={`/users/${this.props.currentUser.id}`}>Profile</Link>
          </li>
        )}
        <li>
            <Link to={`/`}>Dog Park</Link>
        </li>
        <li>
            <Link to={`/matches`}>Dog Pound</Link>
        </li>
        <li className="logout" onClick={this.handleLogout}>
            <Link to={`/login`}>logout</Link>
        </li>
        <li className="settings">
            <Link to={`/edit`}>Edit Profile</Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });
export default connect(mapStateToProps, { logout })(NavBar);
