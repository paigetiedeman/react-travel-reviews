import React from 'react';
import ReviewList from './ReviewList';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class ReviewControl extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   reviews: []
    // };
  }


  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }
  
  render(){
    const { error, isLoaded, reviews } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else if (reviews.length) {
      return (
        <React.Fragment>
          <h1>Reviews Controller</h1> 
          <ReviewList reviews={reviews} />
          
        </React.Fragment>
      );
    } else {
      return <div>There are no reviews in the array</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    isLoaded: state.isLoaded,
    error: state.error
  }
}

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

export default connect(mapStateToProps)(ReviewControl);