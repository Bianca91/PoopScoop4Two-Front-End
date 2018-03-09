import React, {PureComponent} from 'react'

export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<div class="row">
				<div class="col s4">
				</div>
				<div class="input-field col s4">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>
			</div>
			<div class="row">
				<div class="col s4">
				</div>
				<div class="input-field col s4">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>
			</div>
			<div class="row">
				<div class="col s4">
				</div>
				<div class="input-field col s4">
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>
			</div>
			<div class="row">
				<div class="col s4">
				</div>
				<div class="input-field col s4">
					<label htmlFor="name">What is your name?</label>
					<input type="text" name="name" id="name" value={
						this.state.name || ''
					} onChange={ this.handleChange } />
				</div>
			</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}
				<button class="btn btn-large green darken-4 waves-effect waves-light z-depth-2" type="submit"><
					i class="material-icons left">done<
					/i>Sign Up<
				/button>
				<br/>
				<p>Already have an acount?</p>
				<a href="/login"class="waves-effect waves-green btn-flat">Log In</a>
			</form>
		)
	}
}
