import React, { PureComponent } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
            <a>
              <Link to={`/users/${this.props.currentUser.id}`}>Profile</Link>
            </a>
          </li>
        )}
        <li>
          <a>
            <Link to={`/`}>PetShop</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to={`/matches`}>Dog Pound</Link>
          </a>
        </li>
        <li className="logout" onClick={this.handleLogout}>
          <a>
            <Link to={`/login`}>logout</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to={`/edit`}>Edit Profile</Link>
          </a>
        </li>
      </ul>
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });
export default connect(mapStateToProps, { logout })(NavBar);
