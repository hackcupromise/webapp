import * as React from 'react';
import './index.css';

interface Props extends React.Props<void> {
  children?: any
  className?: string
}

class Card extends React.Component<Props, {}> {
  render() {
    return (
      <div className={`Card ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
