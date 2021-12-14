import React from "react";
import PropTypes from "prop-types";
import { TextField, Button, Rating } from '@mui/material';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit}>
        <TextField
          name='name'
          defaultValue='Name of Review' 
          />
          <br />
        <TextField
          name='city'
          defaultValue='city' 
          />
          <br />
        <TextField
          name='country'
          defaultValue='country' 
          />
          <br />
        <Rating
          name='rating'
          defaultValue={3}
          max={5}

          />
          <br />
        <TextField
          name='description'
          defaultValue='Describe your visit.' 
          />
          <br />
        <Button type='submit' >{props.buttonText}</Button>
      </form>
        <br />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
