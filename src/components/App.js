import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

const App = () => (
  <React.Fragment>
    <Header />
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
      name="Alan Rails"
      species="human" />
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
      name="Alan Rails"
      species="human" />
    <Footer />
  </React.Fragment>
);

export default App;
