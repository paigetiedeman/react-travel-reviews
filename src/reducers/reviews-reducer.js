import * as c from './../actions/ActionTypes';

let initialState = {
  isLoaded: false,
  reviews: [],
  error: null,
  showAddForm: false
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
    case c.CREATE_REVIEW:
      return Object.assign({}, state, {
        // isLoaded: false
      });
    case c.CREATE_SUCCESS:
      return Object.assign({}, state, {
        isLoaded: false,
        reviews: [],
        showAddForm: false
      });
    case c.CREATE_FAILURE:
      return Object.assign({}, state, {
        // isLoaded: true,
        error: action.error,
        showAddForm: false
      });
    case c.SHOW_FORM:
      return {
        ...state,
        showAddForm: true
      }
        
    default:
      return state;
    }
};

