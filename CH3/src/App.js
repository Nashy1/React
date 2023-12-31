import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
class App extends Component {

  render() {
    const isValid = true;
    return (
      <div>
        <Products />
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
        <Button variant='primary' disabled={!isValid}>clicke here</Button>
      </div>
    );
  }
}
export default App;