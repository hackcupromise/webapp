import * as React from 'react';
import { Charity } from '../../objects';
import Card from '../Card';
import './index.css';

interface Props extends React.Props<void> {
  charity: Charity
}

class CharityCard extends React.Component<Props, {}> {
  render() {
    return (
      <Card className="CharityCard">
        <h1>{this.props.charity.name}</h1>
      </Card>
    );
  }
}

export default CharityCard;
