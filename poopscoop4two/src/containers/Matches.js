import React, { PureComponent } from 'react'
import NavBar from '../components/Navbar'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import MatchesList from '../components/MatchesList'


export class Matches extends PureComponent {

  render() {
    if (!this.props.currentUser) return (
      <Redirect to="/login" />
    )

    return (
      <div>
      <div>
      <NavBar/>
      </div>
      <div class="container">
        <h4>"Dog Pound"</h4>
        <MatchesList />
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(Matches)
