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
      <Card className="BusinessCard">
        <h2 className="business-name">{this.props.business.name} <span className={`rank ${this.props.business.trust > 230 ? 'high' : this.props.business.trust > 153 ? 'medium' : 'low'}`}>{Math.round((this.props.business.trust / 255) * 100)}/100</span></h2>
        <p className="total-pool">{this.props.business.totalPool} NEO available to match</p>
        <p className="personal-limit">{this.props.business.personalLimit} NEO limit per person</p>
      </Card>
    );
  }
}

export default BusinessCard;
