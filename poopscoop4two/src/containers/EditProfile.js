import EditForm from "../components/EditForm";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import { getUser } from "../actions/getUser";
import { updateUser } from "../actions/getUser";
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
    const { user } = this.props;
    if (!user) return null;
    return (
      <div>
        <NavBar />
        <Title content="PoopScoop4Two" />
        <br />
        <br />
        <h1>Edit your Profile</h1>
        <EditForm initialValues={user} onSubmit={this.updateUser} />
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { patchUser: updateUser })(EditProfile);
