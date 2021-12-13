import * as c from './ActionTypes';

export const requestReviews = () => ({
  type: c.REQUEST_REVIEWS
});

export const getReviewsSuccess = (reviews) => ({
  type: c.REVIEWS_SUCCESS,
  reviews
});

export const getReviewsFailure = (error) => ({
  type: c.REVIEWS_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestReviews);
    return fetch(`http://localhost:5004/api/Reviews`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getReviewsSuccess(jsonifiedResponse));
        })
        .catch((error) => {
            dispatch(getReviewsFailure(error));
        });
    }
}