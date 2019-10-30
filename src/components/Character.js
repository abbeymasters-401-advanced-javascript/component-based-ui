import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';


export default class Character extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  }
  render() {
    const { img, name, species } = this.props;

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
}



