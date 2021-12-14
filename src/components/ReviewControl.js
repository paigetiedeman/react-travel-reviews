import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import { useSelector, useDispatch } from 'react-redux';
import { makeApiCall } from '../actions';
import { Button } from '@mui/material';
import NewReviewForm from './NewReviewForm';

export default function ReviewControl() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const reviews = useSelector((state) => state.reviews);
  const isLoaded = useSelector((state) => state.isLoaded);
  const [showAddForm, setShowAddForm] = useState(false); //this return an array that has the state variable and a specific setState function.
  /* hook refactor:
react hooks:
state -> useState hook
componentDidMount -> useEffect hook
redux:
mapStateToProps (getting from store) -> useSelector hook
connect (allows us to use mapStateToProps and the dispatch function) -> useDispatch hook
*/

  /* add review:
add review form component
state to show it or not?
extra actions/reducers - same ones as get - 3
show success to the user somehow "you successfully added a review" - p tag
reloads the updated list with the new review - optional 

*/

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(makeApiCall());
  // }
  const handleShowAddForm = () => {
    console.log('clicked add button')
    setShowAddForm(true);
  };

  useEffect(() => {
    dispatch(makeApiCall());
  }, []); //empty array means only do it on mount

  return (
    <>
      <Button variant="outlined" onClick={handleShowAddForm}>
        Add
      </Button>
      {showAddForm ? (
        <NewReviewForm setShowAddForm={setShowAddForm} />
      ) : error ? (
        <>Error: {error.message}</>
      ) : !isLoaded ? (
        <>Loading...</>
      ) : reviews.length ? (
        <>
          <ReviewList reviews={reviews} />
        </>
      ) : (
        <div>There are no reviews in the array</div>
      )}
    </>
  );
}

// const mapStateToProps = state => {
//   return {
//     reviews: state.reviews,
//     isLoaded: state.isLoaded,
//     error: state.error
//   }
// }

// [
//   {
//     "reviewId": 22,
//     "name": "No longer starving",
//     "city": "Portland",
//     "country": "USA",
//     "rating": 5,
//     "description": "I was so hungry, but I found some sick food carts"
//   },
//   {
//     "reviewId": 26,
//     "name": "Winter Visit",
//     "city": "Seattle",
//     "country": "USA",
//     "rating": 4,
//     "description": "Cold and rainy, but pretty Christmas lights"
//   }
// ]

// export default connect(mapStateToProps)(ReviewControl);

// if (error) {
//   return <>Error: {error.message}</>;
// } else if (!isLoaded) {
//   return <>Loading...</>;
// } else if (reviews.length) {
//   return (
//     <>
//       <h1>Reviews Controller</h1>
//       <ReviewList reviews={reviews} />

//     </>
//   );
// } else {
//   return <div>There are no reviews in the array</div>
// }
