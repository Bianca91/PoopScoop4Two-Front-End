import React, { PureComponent } from 'react'
import './Navbar.css'

class NavBar extends PureComponent {
  render() {
    return(
      <ul className="NavBar">
        <li><a>Profile</a></li>
        <li><a>Pet Shop</a></li>
        <li><a>Dog Pound</a></li>
        <li className="logout"><a>Log Out</a></li>
        <li className="settings"><a>Settings</a></li>
      </ul>
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
      /*<a className = "Link">{ this.props.content }</a>*/
    )
  }
}

export default NavBar
