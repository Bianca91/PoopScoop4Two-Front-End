import React, { PureComponent } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class NavBar extends PureComponent {
  render() {
    return(
      <ul className="NavBar">
      { this.props.currentUser &&
        <li><a><Link to={ `/users/${this.props.currentUser.id}` }>Profile</Link></a></li>
}
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

const mapStateToProps = ({ currentUser }) => ({ currentUser })
export default connect(mapStateToProps)(NavBar)
