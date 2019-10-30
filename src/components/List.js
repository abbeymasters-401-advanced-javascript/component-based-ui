import React from 'react';
import PropTypes from 'prop-types';
// import items from '../../character-data';


const List = ({ items, Component }) => {
  const characters = items.map(item => {
    return <Component key={item.name}
      {...item}
    />;
  });
  return (
    <>
      {characters}
    </>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  Component: PropTypes.func.isRequired
};

export default List;
