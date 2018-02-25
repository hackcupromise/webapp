import * as React from 'react';
import './index.css';
import { Charity, Company } from '../../objects';
import CharityCard from '../CharityCard';
import { Link, Switch, Route } from 'react-router-dom';
import BusinessCard from '../BusinessCard';

class CardContainer extends React.Component {
  charities: Charity[] = [
    {name: 'WWF', description: 'animal help'},
    {name: 'EthanCo', description: 'Ethan\'s Evil Deeds'},
    {name: 'EFF', description: 'The Electronic Frontier Foundation is the leading nonprofit organization defending civil liberties in the digital world.'},
    {name: 'FIRST', description: 'The mission of FIRST is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting Mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.'},
    {name: 'Scratch Foundation', description: 'Our mission is to provide all children, from all backgrounds, with opportunities to imagine, create, and collaborate – so they can shape the world of tomorrow.'}
  ]

  companies: Company[] = [
    {name: 'Apple', totalPool: 411976, personalLimit: 10, trust: 254},
    {name: 'Microsoft', totalPool: 123456, personalLimit: 5, trust: 250},
    {name: 'Google', totalPool: 654321, personalLimit: 50, trust: 255},
    {name: 'Coca-Cola', totalPool: 291892, personalLimit: 2, trust: 240},
    {name: 'Node JS', totalPool: 112233, personalLimit: 8, trust: 100},
    {name: 'Devpost', totalPool: 2000, personalLimit: 1, trust: 200}
  ]

  render() {
    return (
      <div className="CardContainer">
        <Switch>
          <Route
            path="/"
            render={props => (
            <>
              {this.charities.map((charity) => (
                <CharityCard charity={charity} />
              ))}
              <Link to="/donate/mytuition" className="cardLink"><CharityCard charity={{name: 'MyTuition', description: 'I\'m a broke college student, pls halp'}} /></Link>
            </>
          )} 
          />
          <Route
            path="/donate/mytuition"
            render={props => (
              <>
                {this.companies.map((company) => (
                  <BusinessCard business={company} />
                ))}
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default CardContainer;
