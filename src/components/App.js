import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

const App = () => (
  <React.Fragment>
    <Header />
    <ul>
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        name="Alan Rails"
        species="Human" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/47.jpeg"
        name="Birdperson"
        species="Alien, Bird-Person" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/68.jpeg"
        name="Colossus"
        species="human" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/106.jpeg"
        name="Dr. Schmidt"
        species="Human, Game" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/185.jpeg"
        name="Joseph Eli Lipkip"
        species="Human" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/279.jpeg"
        name="Regular Legs"
        species="Human" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/366.jpeg"
        name="Trunk Morty"
        species="Humanoid, Trunk-Person" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/417.jpeg"
        name="Baby Legs Chief"
        species="Human" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        species="Human" />
      <Character
        img="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        name="Morty Smith"
        species="Human" />
    </ul>
    <Footer />
  </React.Fragment>
);

export default App;
