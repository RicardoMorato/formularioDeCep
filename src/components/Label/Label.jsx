import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

export default function Label({ labelName }) {
  Label.propTypes = {
    labelName: PropTypes.string,
  };

  Label.defaultProps = {
    labelName: '',
  };

  return (
    <p>{labelName}</p>
  );
}
