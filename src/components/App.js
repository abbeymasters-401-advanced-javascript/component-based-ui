import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import allChars from '../../character-data';
import List from './List';


const App = () => (
  <React.Fragment>
    <Header />
    <ul>
      <List
        items={allChars}
        Component={Character}
      />
    </ul>
    <Footer />
  </React.Fragment>
);

export default App;
