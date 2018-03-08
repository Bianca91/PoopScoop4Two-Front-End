import PropTypes from "prop-types";
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

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  updateUser = user => {
    this.props.updateUser(this.props.match.params.id, user);
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
        <NavBar />
        <Title content="PoopScoop4Two" />
        <br />
        <br />
        <h1>Edit your Profile</h1>
        {this.state.edit && <EditForm initialValues={user} onSubmit={null} />}

        {!this.state.edit && (
          <div>
            <EditForm initialValues={user} onSubmit={this.updateUser} />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { getUser, updateUser })(EditProfile);
