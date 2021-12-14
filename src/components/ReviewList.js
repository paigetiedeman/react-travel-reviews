import React from 'react'

export default function ReviewList({reviews}) {
  return (
    <ul>
          {reviews.map((review) =>
            <div key={review.reviewId}>
              <h3>{review.name}</h3>
              <h3>{review.city}</h3>
              <h3>{review.country}</h3>
              <p>Rating: {review.rating}</p>
              <p>{review.description}</p>
            </div>
          )}
        </ul>
  )
}
