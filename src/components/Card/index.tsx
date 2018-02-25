import * as React from 'react';
import './index.css';
import { observer } from 'mobx-react';

interface Props extends React.Props<void> {
  children?: any
  className?: string
}

@observer
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
