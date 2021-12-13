import React from 'react';

class ReviewControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      reviews: []
    };
  }

  makeApiCall = () => {
    fetch(`http://localhost:5004/api/Reviews`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          this.setState({
            isLoaded: true,
            reviews: jsonifiedResponse
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  componentDidMount() {
    this.makeApiCall();
  }
  
  render(){
    const { error, isLoaded, reviews } = this.state;
  if (error) {
    return <React.Fragment>Error: {error.message}</React.Fragment>;
  } else if (!isLoaded) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else if (reviews.length) {
    return (
      <React.Fragment>
        <h1>Reviews Controller</h1>
        <ul>
          {reviews.map((review) =>
            <div key={review.reviewId}>
              <h3>{review.name}</h3>
              <h3>{review.city}</h3>
              <p>Rating: {review.rating}</p>
              <p>{review.description}</p>
            </div>
          )}
        </ul>
      </React.Fragment>
    );
  } else {
    return <div>There are no reviews in the array</div>
  }
}
}

// const mapStateToProps = state => {
//   return {
//     reviews: state.reviews,
//     isLoading: state.isLoading,
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

export default ReviewControl; //connect(mapStateToProps)(ReviewControl);