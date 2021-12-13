import * as c from './../actions/ActionTypes';

let initialState = {
  isLoaded: false,
  reviews: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_REVIEWS:
      return Object.assign({}, state, {
        isLoaded: false
      });
    case c.REVIEWS_SUCCESS:
      return Object.assign({}, state, {
        isLoaded: true,
        reviews: action.reviews
      });
      case c.REVIEWS_FAILURE:
        return Object.assign({}, state, {
          isLoaded: true,
          error: action.error
        });
    default:
      return state;
    }
};