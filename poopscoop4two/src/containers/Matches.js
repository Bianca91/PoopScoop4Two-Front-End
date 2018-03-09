import React, { PureComponent } from 'react'
import NavBar from '../components/Navbar'
import MatchesList from '../components/MatchesList'


export class Matches extends PureComponent {

  render() {
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

export default Matches
