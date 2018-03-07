import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DogImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <img className="dog" src={this.props.image} />
    )
  }
}
export default DogImage;
