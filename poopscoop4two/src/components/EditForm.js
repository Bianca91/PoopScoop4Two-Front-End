import React, { PureComponent } from "react";

class EditForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const initialValues = this.props.initialValues || {};
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={this.state.email || initialValues.email || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            value={this.state.password || initialValues.password || ""}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    );
  }
}

export default EditForm;
