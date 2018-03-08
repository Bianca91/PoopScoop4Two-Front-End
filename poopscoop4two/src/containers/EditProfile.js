import PropTypes from "prop-types";
import EditForm from "../components/EditForm";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import { getUser } from "../actions/getUser";
import { updateUsers } from "../actions/updateUsers";
import Title from "../components/Title";

class EditProfile extends PureComponent {
  state = {
    edit: false
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  updateUsers = user => {
    this.props.updateUsers(this.props.match.params.id, user);
    this.toggleEdit();
  };

  componentWillMount(props) {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;

    return (
      <div>
        <h1>Edit your Profile</h1>
        {this.state.edit && <EditForm initialValues={user} onSubmit={null} />}

        {!this.state.edit && (
          <div>
            <EditForm initialValues={user} onSubmit={this.updateUsers} />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { getUser, updateUsers })(EditProfile);
