import { getJSON } from './settings';

const getProfile = () => {
  return getJSON('/api/');
}

export {
  getProfile
};
