import PropTypes from "prop-types";
import EditForm from "../components/EditForm";
import { connect } from "react-redux";
import React, { PureComponent } from "react";
import { getUser } from "../actions/getUser";
import { updateUsers } from "../actions/updateUsers";
import Title from "../components/Title";

export class EditProfile extends PureComponent {
  state = {
    edit: false
  };

  componentWillMount(props) {
    this.props.getUser(this.props.match.params.id);
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  updateUsers = user => {
    this.props.updateUsers(this.props.match.params.id, user);
    this.toggleEdit();
  };

  render() {
    const { user } = this.props;
    if (!user) return null;

    return (
      <div className="EditProfile">
        <Title content="Edit PoopScoop4Two Profile" />
        <br />
        <p>Type in your new email address and password</p>
        <br />
        {this.state.edit && <EditForm initialValues={user} onSubmit={null} />}

        <div>
          {!this.state.edit && (
            <EditForm initialValues={user} onSubmit={this.updateUsers} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { getUser, updateUsers })(EditProfile);
