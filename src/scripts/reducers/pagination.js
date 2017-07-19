import { PAGINATION } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';
function pagination(state = { current: 1, total: 0, pages: [] }, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      var f = action.payload.pathname.split('/');
      return Object.assign({}, state, { current: f[2] || 1 });
    case PAGINATION:
      return Object.assign({}, state, action.pagination);
  }
  return state;
}

export default pagination;
