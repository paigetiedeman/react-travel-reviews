import React from 'react'
import { Card } from 'react-bootstrap'

export default function ReviewList({reviews}) {
  return (
    <>
      <Card>
      {reviews.map((review) =>
        <div key={review.reviewId}>
          <h3>{review.name}</h3>
          <h3>{review.city}</h3>
          <h3>{review.country}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.description}</p>
        </div>
      )}
      </Card>
    </>
  )
}
