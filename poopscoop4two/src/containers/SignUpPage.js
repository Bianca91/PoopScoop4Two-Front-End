import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/users'
import SignUpForm from '../components/SignUpForm'
import {Redirect} from 'react-router-dom'

class SignUpPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.email, data.password, data.name)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/login" />
		)
		return (
			<div>
				<h1>Sign up</h1>

				<SignUpForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signup.error }</p>
			</div>
		)
	}
}

const mapStateToProps = ({ signup }) => ({ signup })

export default connect(mapStateToProps, {postSignup: signup})(SignUpPage)
