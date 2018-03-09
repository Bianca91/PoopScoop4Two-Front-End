import EditForm from "../components/EditForm";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import { getUser } from "../actions/getUser";
import { updateUser } from "../actions/getUser";
import {Redirect} from 'react-router-dom'
import Title from "../components/Title";
import NavBar from "../components/Navbar";

class EditProfile extends PureComponent {
  state = {
    edit: false
  };

  updateUser = user => {
    this.props.patchUser(this.props.match.params.id, user.name, user.email, user.password);
  };


  componentWillUpdate() {
    this.props.updateUser();
  }

  render() {
    if (!this.props.currentUser) return (
      <Redirect to="/login" />
    )
    const { user } = this.props;
    if (!user) return null;
    return (
      <div>
        <br />
        <h1>Edit your Profile</h1>
        <EditForm initialValues={user} onSubmit={this.updateUser} />
      </div>
    );
  }
}
const mapStateToProps = ({ user, currentUser }) => ({ user, currentUser });

export default connect(mapStateToProps, { patchUser: updateUser })(EditProfile);
