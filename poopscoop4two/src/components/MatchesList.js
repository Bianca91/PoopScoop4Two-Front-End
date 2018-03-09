import React, { PureComponent } from 'react'
import './MatchesList.css'
import {connect} from 'react-redux'
import {getMatches} from '../actions/getMatches'


class MatchesList extends PureComponent {

  componentWillMount() {
    this.props.getMatches()
  }

render() {

  if(!this.props.matches) return null

    return (
      <div className="matchlist">
      <div class="container">
        <table class="highlight">
    <thead>
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Favorite Breed</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{this.props.matches[0].name}</td>
        <td>{this.props.matches[0].email}</td>
        <td>{this.props.matches[0].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[1].name}</td>
        <td>{this.props.matches[1].email}</td>
        <td>{this.props.matches[1].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[2].name}</td>
        <td>{this.props.matches[2].email}</td>
        <td>{this.props.matches[2].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[3].name}</td>
        <td>{this.props.matches[3].email}</td>
        <td>{this.props.matches[3].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[4].name}</td>
        <td>{this.props.matches[4].email}</td>
        <td>{this.props.matches[4].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[5].name}</td>
        <td>{this.props.matches[5].email}</td>
        <td>{this.props.matches[5].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[6].name}</td>
        <td>{this.props.matches[6].email}</td>
        <td>{this.props.matches[6].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[7].name}</td>
        <td>{this.props.matches[7].email}</td>
        <td>{this.props.matches[7].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[8].name}</td>
        <td>{this.props.matches[8].email}</td>
        <td>{this.props.matches[8].breedStats[0].breed}</td>
      </tr>
      <tr>
        <td>{this.props.matches[9].name}</td>
        <td>{this.props.matches[9].email}</td>
        <td>{this.props.matches[9].breedStats[0].breed}</td>
      </tr>
    </tbody>
  </table>
  </div>

      </div>
    )}
}

const mapStateToProps = ({ matches }) => ({ matches })
export default connect(mapStateToProps, {getMatches})(MatchesList)
