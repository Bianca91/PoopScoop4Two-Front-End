import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class DogImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <img className="dog" src={this.props.image} alt="dog"/>
    )
  }
}
export default DogImage;
