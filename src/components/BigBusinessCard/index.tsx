import * as React from 'react';
import { Company } from '../../objects';
import Card from '../Card';
import './index.css';

interface Props extends React.Props<void> {
  business: Company
}

class BigBusinessCard extends React.Component<Props, {}> {
  render() {
    return (
      <Card className="BigBusinessCard">
        <div className="left">
          <h2 className="business-name">{this.props.business.name} <span className={`rank ${this.props.business.trust > 230 ? 'high' : this.props.business.trust > 153 ? 'medium' : 'low'}`}>{Math.round((this.props.business.trust / 255) * 100)}/100</span></h2>
          <p className="total-pool">{this.props.business.totalPool} NEO available to match</p>
          <p className="personal-limit">{this.props.business.personalLimit} NEO limit per person</p>
          <p className="guarantee">30 day matching guarantee</p>
        </div>
        <div className="left">
          <button className="donate-button">Donate</button>
        </div>
      </Card>
    );
  }
}

export default BigBusinessCard;
