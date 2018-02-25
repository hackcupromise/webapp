import * as React from 'react';
import './index.css';
import Card from '../Card';

class CardContainer extends React.Component {
  render() {
    return (
      <div className="CardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default CardContainer;
