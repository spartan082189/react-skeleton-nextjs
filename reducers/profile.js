/**
 |--------------------------------------------------
 | @reducer
 | ### This is a sample boilerplate Redux reducer file.
 |--------------------------------------------------
 */
import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import * as PROFILE from 'constants/profile';

export const initialState = {
	user: {}
}

const reducer = handleActions({
	[PROFILE.SET_USER_PROFILE]: (state, { payload: profile }) => {
		return state.set('user', fromJS(profile));
	},
	[PROFILE.LOADING_PROFILE]: (state, { payload: loading }) => {
		return state.set('loadingProfile', loading);
	},
	[PROFILE.FETCH_PROFILE_SUCCESS]: (state, { payload: success }) => {
		return state.set('profileSuccess', success);
	},
	[PROFILE.FETCH_PROFILE_ERROR]: (state, { payload: error }) => {
		return state.set('profileError', error);
	}
}, fromJS(initialState))

export default reducer;