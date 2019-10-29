import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ img, name, species }) {
  return (
    <>
    <li><img src={img} /></li>
    <li>Name: {name}</li>
    <li>Species: {species}</li>
    </>
  )
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};
