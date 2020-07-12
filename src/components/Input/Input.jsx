import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import './Input.scss';

export default function Input({ cep, other, handleChange }) {
  Input.propTypes = {
    cep: PropTypes.bool,
    other: PropTypes.string,
    handleChange: PropTypes.func,
  };

  Input.defaultProps = {
    cep: true,
    other: '',
    handleChange: () => {},
  };

  return (
    cep
      ? (
        <TextField
          label="CEP"
          id="standard-basic"
          onChange={handleChange}
          inputProps={
        {
          className: 'Cep',
        }
      }
        />
      )
      : <TextField label={other} disabled />
  );
}
