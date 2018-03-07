import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import NavBar from '../components/Navbar'
import User from '../components/User'

const user = {
    id: 1,
    name: 'Snoop D.O. Double G',
    email: "formerlysnooplion@gizoogle.com"
  }

export class Matches extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Matches">
        <NavBar/>
        <Title content="Dog Pound"/>
        <ul>
         <li><User user={user} /></li>
         <li><User user={user} /></li>
         <li><User user={user} /></li>
        </ul>
      </div>
    )
  }
}

export default Matches
