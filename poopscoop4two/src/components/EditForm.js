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
            type="email"
            name="email"
            id="email"
            value={this.state.email || initialValues.email || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="name">What is your name?</label>
          <input
            type="name"
            name="name"
            id="name"
            value={this.state.name || initialValues.name || ""}
            onChange={this.handleChange}
          />
        </div>

        {this.state.password &&
          this.state.confirmPassword &&
          this.state.password !== this.state.confirmPassword && (
            <p style={{ color: "red" }}>The passwords do not match!</p>
          )}

        <button type="submit">Edit</button>
      </form>
    );
  }
}

export default EditForm;
