import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import './Input.scss';

export default function Input({ cep, other }) {
  Input.propTypes = {
    cep: PropTypes.bool,
    other: PropTypes.string,
  };

  Input.defaultProps = {
    cep: true,
    other: '',
  };

  return (
    cep
      ? <TextField label="CEP" id="standard-basic" />
      : <TextField label={other} id="filled-basic" disabled />
  );
}
