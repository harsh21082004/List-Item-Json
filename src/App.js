// src/App.js

import React from 'react';
import ItemList from './ItemList';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <h1 className="text-center mt-5">Item List</h1>
      <ItemList />
    </Container>
  );
};

export default App;
