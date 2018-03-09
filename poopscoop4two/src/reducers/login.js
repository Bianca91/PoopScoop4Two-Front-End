import {USER_LOGIN_FAILED} from '../actions/users'
import { USER_LOGOUT_SUCCESS } from '../actions/users'

export default function (state = {}, action) {
	switch (action.type) {
		case USER_LOGIN_FAILED:
			return {
				error: action.payload
			}
		case USER_LOGOUT_SUCCESS:
			return {}

		default: return state
	}
}
