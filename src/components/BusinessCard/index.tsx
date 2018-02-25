import * as React from 'react';
import { Company } from '../../objects';
import Card from '../Card';
import './index.css';

interface Props extends React.Props<void> {
  business: Company
}

class BusinessCard extends React.Component<Props, {}> {
  render() {
    return (
      <Card>
        <h2>{this.props.business.name}</h2>
      </Card>
    );
  }
}

export default BusinessCard;
