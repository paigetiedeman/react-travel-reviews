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

export const createReviews = (review) => ({
  type: c.CREATE_REVIEW,
  review
});

export const createSuccess = () => ({
  type: c.CREATE_SUCCESS,
});

export const createFailure = (error) => ({
  type: c.CREATE_FAILURE,
  error
});

export const showForm = () => ({
  type: c.SHOW_FORM
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
export const makeCreateApiCall = (review) => {
  return dispatch => {
    dispatch(requestReviews);
    return fetch(`http://localhost:5004/api/Reviews`, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(createSuccess(jsonifiedResponse));
        })
        .catch((error) => {
          dispatch(createFailure(error));
        })
      }   
}

// fetch('https://httpbin.org/post', {
//   method: 'post',
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(review)
// }).then(response => response.json())
//   .then(response => console.log(response));
