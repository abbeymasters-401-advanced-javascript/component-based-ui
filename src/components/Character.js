import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default function Character({ img, name, species }) {
  return (
    <>
      <li className={styles.Character}>
        <img src={img} />
        <h2>Name: {name}</h2>
        <p>Species: {species}</p>
      </li>
    </>
  );
}

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};
