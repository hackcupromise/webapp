import * as React from 'react';
import './index.css';
import { Charity } from '../../objects';
import { RouteComponentProps, Switch, Route } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface Props extends RouteComponentProps<void> {
  charity?: Charity
}

@observer
class Sidebar extends React.Component<Props> {
  render() {
    return (
      <TransitionGroup className="Sidebar">
      <Link to="/" className="brand-link"><h1 className="brand">Promise.</h1></Link>
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
                  null
                )}
              />
              <Route
                path="/donate"
                render={props => (
                  this.props.charity ?
                  <>
                    <h1 className="charity-name">{this.props.charity.name}</h1>
                    <p className="charity-description">{this.props.charity.description}</p>
                    {this.props.charity.total ?
                    <p className="total-donated"><em>{this.props.charity.total} NEO</em> donated to this charity through Promise.</p>
                    : null }
                  </>
                  : null
                )}
              />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Sidebar;
