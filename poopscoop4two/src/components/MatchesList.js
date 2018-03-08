import React, { PureComponent } from 'react'
import './MatchesList.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getMatches} from '../actions/getMatches'


class MatchesList extends PureComponent {

  componentWillMount() {
    this.props.getMatches()
  }

render() {

  if(!this.props.matches) return null
  
    return (
      <div>
        <ul className='Pound'>
          {this.props.matches.map( user =>
            <li><h1>{user.name} = {user.email}</h1></li>)}
        </ul>
      </div>
    )}
}

const mapStateToProps = ({ matches }) => ({ matches })
export default connect(mapStateToProps, {getMatches})(MatchesList)
