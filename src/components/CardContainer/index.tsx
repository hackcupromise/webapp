import * as React from 'react';
import './index.css';
import { Charity, Company } from '../../objects';
import CharityCard from '../CharityCard';
import { Link, Switch, Route, RouteComponentProps } from 'react-router-dom';
import BusinessCard from '../BusinessCard';
import { observer } from 'mobx-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import BigBusinessCard from '../BigBusinessCard';

interface Props extends RouteComponentProps<void> {
  setCharity: (charity: Charity) => void
}

@observer
class CardContainer extends React.Component<Props> {
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
    {name: 'Coca-Cola', totalPool: 291892, personalLimit: 2, trust: 240},
    {name: 'Node JS', totalPool: 112233, personalLimit: 8, trust: 100},
    {name: 'Devpost', totalPool: 2000, personalLimit: 1, trust: 200}
  ]

  sortByTrust(a: Company, b: Company) {
    if (a.trust > b.trust) {
      return -1;
    }

    if (a.trust < b.trust) {
      return 1;
    }

    return 0;
  }

  render() {
    return (
      <TransitionGroup className="CardContainer">
        <CSSTransition
          key={location.pathname}
          timeout={{
            enter: 1000,
            exit: 500,
           }}
          classNames="fade"
        >
        <div className="content animatedElement">
          <Switch location={this.props.location}>
            <Route
              path="/"
              exact={true}
              render={props => (
              <>
                {this.charities.map((charity) => (
                  <CharityCard key={charity.name} charity={charity} />
                ))}
                <Link to="/donate/mytuition" className="cardLink"><CharityCard charity={{name: 'MyTuition', description: 'I\'m a broke college student, pls halp'}} /></Link>
              </>
            )} 
            />
            <Route
              path="/donate/mytuition"
              exact={true}
              render={props => {
                this.props.setCharity({name: 'MyTuition', description: 'Help me pay for my tuition bills! I\'m a broke college student, and donating to me would really help.'})
                return (
                  <>
                    <Link to="/donate/mytuition/google" className="cardLink"><BusinessCard business={{name: 'Google', totalPool: 654321, personalLimit: 50, trust: 255}} /></Link>
                    {this.companies.sort(this.sortByTrust).map((company) => (
                      <BusinessCard key={company.name} business={company} />
                    ))}
                  </>
                )
              }}
            />
            <Route
              path="/donate/mytuition/google"
              exact={true}
              render={props => {
                this.props.setCharity({name: 'MyTuition', description: 'Help me pay for my tuition bills! I\'m a broke college student, and donating to me would really help.'})
                return (
                  <>
                    <BigBusinessCard business={{name: 'Google', totalPool: 654321, personalLimit: 50, trust: 255}} />
                  </>
                )
              }}
            />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default CardContainer;
