import { createAction } from 'redux-actions';
import { getProfile } from 'api/profile';

export const setUserProfile = createAction('SET_USER_PROFILE');
export const loadingProfile = createAction('LOADING_PROFILE');
export const fetchProfileSuccess = createAction('FETCH_PROFILE_SUCCESS');
export const fetchProfileError = createAction('FETCH_PROFILE_ERROR');

// Thunks
export const fetchProfile = () => {
  return async (dispatch) => {
    dispatch(loadingProfile(true));
    try {
      const response = await getProfile();
      dispatch(loadingProfile(false));
      if (response.results) {
        dispatch(setUserProfile(response.results[0]));
        dispatch(fetchProfileSuccess(true));
      } else {
        dispatch(fetchProfileError(false));
      }
    } catch (err) {
      dispatch(loadingProfile(false));
      dispatch(fetchProfileError(true));
    }
  };
};
