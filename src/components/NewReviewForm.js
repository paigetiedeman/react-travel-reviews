import React from 'react'
import ReusableForm from './ReusableForm';
import { useDispatch } from 'react-redux';
import { makeCreateApiCall } from '../actions';


export default function NewReviewForm() {
  // const {setShowAddForm} = props;
  const dispatch = useDispatch();

  //click handlers
  function handleSubmit(e) {
    e.preventDefault();
    // const name= e.target.name.value
    const review = {
      name: e.target.name.value,
      city: e.target.city.value,
      country: e.target.country.value,
      rating: e.target.rating.value,
      description: e.target.description.value
    }
    console.log(review)
    dispatch(makeCreateApiCall(review));

    //reset our state to defaults
  }

  return (
    <div>
      <ReusableForm handleSubmit={handleSubmit} buttonText='Add Review'/>
    </div>
  )
}
