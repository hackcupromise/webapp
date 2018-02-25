import * as React from 'react';
import './index.css';
import { Charity } from '../../objects';
import CharityCard from '../CharityCard';

class CardContainer extends React.Component {
  charities: Charity[] = [
    {name: 'WWF', description: 'animal help'},
    {name: 'EthanCo', description: 'Ethan\'s Evil Deeds'},
    {name: 'MyTuition', description: 'I\'m a broke college student, pls halp'},
    {name: 'EFF', description: 'The Electronic Frontier Foundation is the leading nonprofit organization defending civil liberties in the digital world.'},
  ]
  render() {
    return (
      <div className="CardContainer">
        {this.charities.map((charity) => (
          <CharityCard charity={charity} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
