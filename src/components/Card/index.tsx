import * as React from 'react';
import './index.css';

interface Props {
  children?: React.Component[]
}

class Card extends React.Component<Props> {
  render() {
    return (
      <div className="Card">
        {this.props.children}
      </div>
    );
  }
}

export default Card;
